import { useState } from "react";
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function ManagementRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    collegeName: "",
    headName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const user = userCred.user;

      // 🔥 SAVE MANAGEMENT DATA
      await setDoc(doc(db, "management", user.uid), {
        uid: user.uid,
        collegeName: form.collegeName,
        headName: form.headName,
        email: form.email,
        role: "management",
        status: "pending",
        createdAt: new Date(),
      });

      alert("College Registered Successfully! Waiting for Admin Approval.");
      navigate("/login");

    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2 className="auth-title">Smart League</h2>
        <p className="auth-subtitle">College Registration</p>

        <form onSubmit={handleSubmit}>

          <input
            name="collegeName"
            placeholder="College Name"
            onChange={handleChange}
            className="auth-input"
            required
          />

          <input
            name="headName"
            placeholder="Head / Coordinator Name"
            onChange={handleChange}
            className="auth-input"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="auth-input"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="auth-input"
            required
          />

          <button className="auth-btn">Register College</button>
        </form>

        <p className="auth-switch">
          Already registered?{" "}
          <span
            className="auth-link"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}
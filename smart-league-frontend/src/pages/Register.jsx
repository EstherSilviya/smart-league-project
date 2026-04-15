import { useState } from "react";
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Register() {
  const [form, setForm] = useState({
    collegeName: "",
    staffName: "",
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

      await setDoc(doc(db, "editors", user.uid), {
        uid: user.uid,
        collegeName: form.collegeName,
        staffName: form.staffName,
        email: form.email,
        role: "editor",
        status: "pending",
        createdAt: new Date(),
      });

      alert("Registered Successfully!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2 className="auth-title">Smart League</h2>
        <p className="auth-subtitle">Editor Registration</p>

        <form onSubmit={handleSubmit}>

          <input
            name="collegeName"
            placeholder="College Name"
            onChange={handleChange}
            className="auth-input"
            required
          />

          <input
            name="staffName"
            placeholder="Staff Name"
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

          <button className="auth-btn">Register</button>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <span
            className="auth-link"
            onClick={() => window.location.href = "/login"}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}
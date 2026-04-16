import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCred = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const user = userCred.user;
      console.log(user.uid); // 
      alert(user.uid);

      // 🔐 CHECK ADMIN
      const adminDoc = await getDoc(doc(db, "admins", user.uid));

      if (!adminDoc.exists()) {
        alert("Access denied! Not an admin.");
        return;
      }

      alert("Admin Login Successful!");
      navigate("/admin-dashboard");

    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2 className="auth-title">Smart League</h2>
        <p className="auth-subtitle">Admin Login</p>

        <form onSubmit={handleLogin}>

          <input
            name="email"
            type="email"
            placeholder="Admin Email"
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

          <button className="auth-btn">Login as Admin</button>

        </form>

      </div>
    </div>
  );
}
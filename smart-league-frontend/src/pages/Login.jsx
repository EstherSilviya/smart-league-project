import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "editor", // default
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

      // 🔥 ROLE BASED CHECK
      if (form.role === "admin") {
        const adminDoc = await getDoc(doc(db, "admins", user.uid));

        if (!adminDoc.exists()) {
          alert("Not an admin");
          return;
        }

        navigate("/admin-dashboard");
        return;
      }

      if (form.role === "management") {
        const managementDoc = await getDoc(doc(db, "management", user.uid));

        if (!managementDoc.exists()) {
          alert("Not a management user");
          return;
        }

        const data = managementDoc.data();

        if (data.status !== "approved") {
          alert("Waiting for admin approval");
          return;
        }

        navigate("/management-dashboard");
        return;
      }

      if (form.role === "editor") {
        const editorDoc = await getDoc(doc(db, "editors", user.uid));

        if (!editorDoc.exists()) {
          alert("Not an editor");
          return;
        }

        const data = editorDoc.data();

        if (data.status !== "approved") {
          alert("Waiting for approval");
          return;
        }

        navigate("/editor-dashboard");
        return;
      }

    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2 className="auth-title">Smart League</h2>
        <p className="auth-subtitle">Login</p>

        <form onSubmit={handleLogin}>

          {/* 🔥 ROLE SELECT */}
          <select
            name="role"
            onChange={handleChange}
            className="auth-input"
          >
            <option value="editor">Editor</option>
            <option value="management">Management</option>
            <option value="admin">Admin</option>
          </select>

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

          <button className="auth-btn">Login</button>
        </form>

      </div>
    </div>
  );
}
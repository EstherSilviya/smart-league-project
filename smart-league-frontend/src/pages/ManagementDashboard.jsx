import { useState } from "react";
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "./ManagementDashboard.css";

export default function ManagementDashboard() {
  const [form, setForm] = useState({
    staffName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddStaff = async (e) => {
    e.preventDefault();

    try {
      const managementId = auth.currentUser.uid;

      const userCred = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const editorUser = userCred.user;

      await setDoc(doc(db, "editors", editorUser.uid), {
        uid: editorUser.uid,
        staffName: form.staffName,
        email: form.email,
        role: "editor",
        status: "approved",
        collegeId: managementId,
        createdAt: new Date(),
      });

      alert("Staff added successfully!");

      await signOut(auth);
      alert("Please login again as Editor");

    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="layout">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2>Smart League</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li>Staff</li>
          <li>Posts</li>
          <li>Settings</li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <div className="content">

        <div className="header">
          <h1>Management Dashboard</h1>
          <p>Add and manage your college staff</p>
        </div>

        <div className="card">
          <h3>Add Staff</h3>

          <form onSubmit={handleAddStaff} className="form">
            <input
              name="staffName"
              placeholder="Staff Name"
              onChange={handleChange}
              required
            />

            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            <button type="submit">Add Staff</button>
          </form>
        </div>

      </div>
    </div>
  );
}
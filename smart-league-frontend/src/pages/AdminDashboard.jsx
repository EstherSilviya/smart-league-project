import "./AdminDashboard.css";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchUsers = async () => {
    let allUsers = [];

    const managementSnap = await getDocs(collection(db, "management"));
    managementSnap.forEach((d) => {
      allUsers.push({ id: d.id, ...d.data() });
    });

    const editorSnap = await getDocs(collection(db, "editors"));
    editorSnap.forEach((d) => {
      allUsers.push({ id: d.id, ...d.data() });
    });

    setUsers(allUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const getCollection = (role) =>
    role === "management" ? "management" : "editors";

  const approveUser = async (id, role) => {
    await updateDoc(doc(db, getCollection(role), id), {
      status: "approved",
    });
    fetchUsers();
  };

  const deleteUser = async (id, role) => {
    await deleteDoc(doc(db, getCollection(role), id));
    fetchUsers();
  };

  // 🔍 FILTER LOGIC
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      (user.staffName || user.headName || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesRole =
      roleFilter === "all" || user.role === roleFilter;

    const matchesStatus =
      statusFilter === "all" || user.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const total = users.length;
  const pending = users.filter((u) => u.status === "pending").length;

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>Smart League</h2>
        <p>Dashboard</p>
        <p>Users</p>
        <p>Students</p>
      </div>

      {/* MAIN */}
      <div className="main">

        <div className="header">
          <h1>User Access Control</h1>
          <p>Manage users and approvals</p>
        </div>

        {/* CARDS */}
        <div className="cards">
          <div className="card">
            <h3>Total Users</h3>
            <h2>{total}</h2>
          </div>

          <div className="card">
            <h3>Pending</h3>
            <h2>{pending}</h2>
          </div>
        </div>

        {/* 🔍 SEARCH + FILTER */}
        <div className="top-bar">
          <input
            type="text"
            placeholder="Search by name or email..."
            className="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="filters">
            <select onChange={(e) => setRoleFilter(e.target.value)}>
              <option value="all">All Roles</option>
              <option value="management">Management</option>
              <option value="editor">Editor</option>
            </select>

            <select onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="all">All Status</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

        {/* TABLE */}
        <div className="table">

          <div className="table-header">
            <p>Name</p>
            <p>Email</p>
            <p>Role</p>
            <p>Status</p>
            <p>Actions</p>
          </div>

          {filteredUsers.map((user) => (
            <div key={user.id} className="table-row">
              <p>{user.staffName || user.headName}</p>
              <p>{user.email}</p>

              {/* ROLE BADGE */}
              <p>
                <span className={`badge ${user.role}`}>
                  {user.role}
                </span>
              </p>

              {/* STATUS */}
              <p
                className={
                  user.status === "approved"
                    ? "status-approved"
                    : "status-pending"
                }
              >
                {user.status}
              </p>

              <div>
                {user.status === "pending" && (
                  <button
                    className="btn approve"
                    onClick={() => approveUser(user.id, user.role)}
                  >
                    Approve
                  </button>
                )}

                <button
                  className="btn delete"
                  onClick={() => deleteUser(user.id, user.role)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
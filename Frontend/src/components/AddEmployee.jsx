import React, { useState } from "react";
import axios from "axios";
import "./AddEmployee.css";
import forestBg from "./image/frontpage.png"; 

function AddEmployee() {
  const [formData, setFormData] = useState({
    name: "",
    employeeId: "",
    department: "",
    position: "",
    email: "",
    phone: "",
    salary: "" // ✅ lowercase
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const res = await axios.post("http://localhost:5000/api/employees", formData);
      setMessage(res.data.message);
      setFormData({
        name: "",
        employeeId: "",
        department: "",
        position: "",
        email: "",
        phone: "",
        salary: "" // ✅ reset salary
      });
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div
      className="employee-container"
      style={{ backgroundImage: `url(${forestBg})` }}
    >
      <div className="employee-overlay">
        <nav className="employee-navbar">
          <h1 className="employee-logo">👨‍💼 Employee Portal</h1>
          <div className="employee-nav-links">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/View">View Employees</a>
            <a href="/login">Login</a>
          </div>
        </nav>

        <div className="employee-box">
          <h2>➕ Add New Employee</h2>
          <form onSubmit={handleSubmit}>
            <InputField label="Name" name="name" value={formData.name} onChange={handleChange} required />
            <InputField label="Employee ID" name="employeeId" value={formData.employeeId} onChange={handleChange} required />
            <InputField label="Department" name="department" value={formData.department} onChange={handleChange} required />
            <InputField label="Position" name="position" value={formData.position} onChange={handleChange} />
            <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
            <InputField label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
            <InputField label="Salary" type="number" name="salary" value={formData.salary} onChange={handleChange} required />
            <button type="submit">Save Employee</button>
          </form>

          {message && <p className="success">{message}</p>}
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
}

function InputField({ label, type = "text", name, value, onChange, required }) {
  return (
    <div className="employee-input-group">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={`Enter ${label}`}
      />
    </div>
  );
}

export default AddEmployee;

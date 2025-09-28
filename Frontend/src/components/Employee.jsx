import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Employee.css";
import frontpage from "./image/frontpage.png";

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/employees"); 
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/employees/${id}`);
      fetchEmployees();
    } catch (err) {
      console.error(err);
    }
  };

  const startEdit = (employee) => {
    setEditId(employee._id);
    setEditData({ ...employee });
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveEdit = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/employees/${id}`, editData);
      setEditId(null);
      fetchEmployees();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="employee-container"
      style={{ backgroundImage: `url(${frontpage})` }}
    >
      <div className="employee-overlay">
        <nav className="employee-navbar">
          <h1 className="employee-logo">👨‍💼 Employee Records</h1>
          <div className="employee-nav-links">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/add">Add Employee</a>
          </div>
        </nav>

        <div className="employee-table-box">
          <h2>📋 Employee List</h2>
          <table>
            <thead>
              <tr>
                {["Name", "Employee ID", "Department", "Position", "Email", "Phone", "Salary", "Actions"].map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp._id}>
                  {["name", "employeeId", "department", "position", "email", "phone", "salary"].map((field) => (
                    <td key={field}>
                      {editId === emp._id ? (
                        <input
                          type={field === "salary" ? "number" : "text"}
                          name={field}
                          value={editData[field] || ""}
                          onChange={handleChange}
                        />
                      ) : (
                        emp[field]
                      )}
                    </td>
                  ))}
                  <td>
                    {editId === emp._id ? (
                      <button className="btn save" onClick={() => saveEdit(emp._id)}>
                        💾 Save
                      </button>
                    ) : (
                      <button className="btn edit" onClick={() => startEdit(emp)}>
                        ✏️ Edit
                      </button>
                    )}
                    <button className="btn delete" onClick={() => deleteEmployee(emp._id)}>
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Employee;

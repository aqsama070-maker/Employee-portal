const express = require("express");
const router = express.Router();
const Employee = require("../Model/Employee");

// ➕ Add Employee
router.post("/", async (req, res) => {
  try {
    const { name, employeeId, department, position, email, phone, salary } = req.body;

    const newEmployee = new Employee({
      name,
      employeeId,
      department,
      position,
      email,
      phone,
      salary
    });

    await newEmployee.save();
    res.json({ message: "Employee saved successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// 📋 Get All Employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✏️ Update Employee
router.put("/:id", async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedEmployee);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// 🗑️ Delete Employee
router.delete("/:id", async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

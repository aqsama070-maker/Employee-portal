const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  employeeId: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  position: { type: String },
  email: { type: String },
  phone: { type: String },
  salary: { type: Number, required: true } // ✅ salary add
});

module.exports = mongoose.model("Employee", EmployeeSchema);

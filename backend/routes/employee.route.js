const express = require('express');
const employeeContoller = require('../controller/employee.controller');
const router = express.Router();


router.post('/add_employee', employeeContoller.AddEmployee);
router.get('/list_employee', employeeContoller.GetEmployee);
router.get('/get_employee/:id', employeeContoller.GetEmployeeById);
router.put('/edit_employee/:id', employeeContoller.EditEmployee);
router.delete('/delete/:id', employeeContoller.DeleteEmployee);

module.exports = router;
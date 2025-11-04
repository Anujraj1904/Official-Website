const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const employeeController = require('../controllers/employee.controller');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/register', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
  employeeController.registeremployee
)

router.post('/login', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
  employeeController.loginemployee
)

router.get('/profile', authMiddleware.authEmployee, employeeController.getemployeeProfile)

router.get('/logout', authMiddleware.authEmployee, employeeController.logoutemployee)



module.exports = router;
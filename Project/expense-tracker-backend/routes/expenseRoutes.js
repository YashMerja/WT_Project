



const express = require('express');
const router = express.Router();
const { addExpense, getExpenses, deleteExpense, updateExpense } = require('../controllers/expenseController');
const auth = require('../middleware/authMiddleware');

// Routes
router.post('/add', auth, addExpense);
router.get('/', auth, getExpenses);


module.exports = router;




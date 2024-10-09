const Expense = require('../models/Expense');




exports.addExpense = async (req, res) => {
  const { description, amount, date, name, paymentMethod } = req.body;
  try {
    const newExpense = new Expense({
      user: req.user.id,
      description,
      amount,
      date, // Add the date
      name, // Add the name
      paymentMethod, // Add payment method
    });

    const expense = await newExpense.save();
    res.json(expense);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Get all expenses for logged-in user
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id }).sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).send('Server error');
  }
};








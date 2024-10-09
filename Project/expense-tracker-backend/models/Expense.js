


const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // Allow date to be selected
  },
  name: {
    type: String, // Name for whom the expense is (if applicable)
    required: true,
  },
  paymentMethod: {
    type: String, // Credit, Debit, Cash, etc.
    required: true,
  },
});

module.exports = mongoose.model('Expense', ExpenseSchema);

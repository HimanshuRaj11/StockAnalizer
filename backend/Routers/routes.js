const { addExpense, getExpense, deleteExpense } = require('../RouteController/expanseRoute');
const { addIncome, getIncomes, deleteIncome } = require('../RouteController/incomeRoute');

const router = require('express').Router();

router.post('/expanse_tracker/add-income', addIncome)
router.get('/expanse_tracker/get-incomes', getIncomes)
router.delete('/expanse_tracker/delete-income/:id', deleteIncome)
router.post('/expanse_tracker/add-expense', addExpense)
router.get('/expanse_tracker/get-expenses', getExpense)
router.delete('/expanse_tracker/delete-expense/:id', deleteExpense)

module.exports = router
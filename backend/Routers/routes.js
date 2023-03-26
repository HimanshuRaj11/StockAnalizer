const { addExpense, getExpense, deleteExpense } = require('../RouteController/expanseRoute');
const { addIncome, getIncomes, deleteIncome } = require('../RouteController/incomeRoute');
const {SignIn,Login, logout} = require("../RouteController/User")
const router = require('express').Router();
const auth = require("../Middleware/auth")

router.post('/signin',SignIn)
router.post('/login',Login)
router.post('/logout',logout)


router.post('/expense_tracker/add-income', addIncome)
router.get('/expense_tracker/get-incomes', getIncomes)
router.delete('/expense_tracker/delete-income/:id', deleteIncome)
router.post('/expense_tracker/add-expense', addExpense)
router.get('/expense_tracker/get-expenses', getExpense)
router.delete('/expense_tracker/delete-expense/:id', deleteExpense)

module.exports = router
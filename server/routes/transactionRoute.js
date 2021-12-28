import express from "express";
import { getTransactions, addTransaction, deleteTransaction } from '../controllers/transactionController.js';

const router = express.Router();
////https://localhost:5000/transaction

router.get('/', getTransactions);
router.post('/', addTransaction);
router.delete('/:id', deleteTransaction);

//export default router <=> import
export default router;
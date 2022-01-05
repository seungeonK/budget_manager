import mongoose from "mongoose";
import Transaction from "../models/transactionModel.js";


// @desc GET all transactions
// @route GET /transactions
// @access Public
export const getTransactions = async (req, res, next) => {
    try {
        // console.log("getTransaction controller in");
        //look into DB, find all transactions
        const allTransactions = await Transaction.find();
        //return all transactions as JSON type to the client
        return res.status(200).json(allTransactions);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}

// @desc GET a transaction
// @route POST /transactions
// @access Public
export const addTransaction = async (req, res, next) => {
    try {
        console.log("addTransaction controller in\n");
        const newTransaction = await Transaction.create(req.body);
        return res.status(201).json(newTransaction)
    } catch (error) {
        console.log(error);
    }
}


// @desc Delete a transaction
// @route DELETE /transactions/:id
// @access Public

export const deleteTransaction = async (req, res, next) => {
    try {
        console.log("deleteTransaction controller in\n");
        const { id } = req.params;

        // if the id is not valid as standarad mongoDB id, it fails to delete
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No transaction with that id');
        //find DB collection by ID
        await Transaction.findByIdAndDelete(id);

        return res.json({ message: `transaction: ${id} has been deleted`});
    } catch (error) {
        console.log(error);
    }
}



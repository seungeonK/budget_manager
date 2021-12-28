import Transaction from "../models/transactionModel.js";


// @desc GET all transactions
// @route GET /transactions
// @access Public
export const getTransactions = async (req, res, next) => {
    try {
        console.log("getTransaction controller in");
        //look into DB, find all transactions
        const allTransactions = await Transaction.find();
        //return all transactions as JSON type to the client
        return res.status(200).json(allTransactions);
    } catch (error) {
        console.log(error);
    }
}

// @desc GET a transaction
// @route POST /transactions
// @access Public

export const addTransaction = (req, res, next) => {
    res.send('POST transactions');
}


// @desc Delete a transaction
// @route DELETE /transactions
// @access Public

export const deleteTransaction = (req, res, next) => {
    res.send('DELETE transactions');
}



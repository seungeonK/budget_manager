const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    name: String,
    amount: Number,
    balance: Number
});

const Transaction = mongoose.model('Transaction', transcationSchema);


export default Transaction
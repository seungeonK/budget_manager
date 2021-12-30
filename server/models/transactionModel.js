import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "please add some text"]
    },
    amount: {
        type: Number,
        required: [true, "Please add a postive or negative number"]
    },
    balance: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Transaction = mongoose.model('Transaction', transactionSchema);


export default Transaction
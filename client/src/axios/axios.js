import axios from "axios";


const url = "http://localhost:5000/transactions";

//returns a Promise object
export const getTransactions = () => {
    return axios.get(url);
}

export const createTransaction = () => {
    return null;
}
import axios from "axios";


const url = "http://localhost:5000/transactions";

//returns a Promise object
export const getTransactions = () => {
    return axios.get(url);
}

export const createTransaction = async transaction => {
    console.log("create Transaction axio in");
    console.log(transaction);
    const promise = await axios.post(url, transaction);
    return promise;
}
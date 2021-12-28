import express from "express";
import mongoose from "mongoose";
import cors from "cors";


import transactionRoute from './routes/transactionRoute.js';

const app = express();
app.use(cors());

app.use('/transactions', transactionRoute);

//will add DB url later
const CONNECTION_URL = "mongodb+srv://seungeonk:seungeonk@cluster0.2i8ir.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
    .catch((error) => console.log(error.message));


app.get('/', (req,res) => {
    try {
        res.send("This is root controller");
    } catch (error) {
        res.send(error);
    }
});



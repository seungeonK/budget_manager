import express from "express";
import mongoose from "mongoose";
import cors from "cors";


import rootRoutes from "./routes/index.js";
import budgetRoutes from "./routes/budget.js";

const app = express();

app.use(cors());

app.use('/budgets', budgetRoutes);

//will add DB url later
const CONNECTION_URL = "null";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));

app.get('/', rootController);



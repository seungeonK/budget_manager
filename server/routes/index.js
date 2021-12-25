import express from "express";

import { rootController } from "../controllers/index.js"

const router = express.Router();


// ---  https://localhost:5000/ ---

router.get('/', rootController);

export default router;
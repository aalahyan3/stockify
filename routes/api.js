import express from "express";
import getStock from "../controllers/getStock.js";
const router = express.Router();

router.get("/get", getStock)

export default router
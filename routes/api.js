import express from "express";
import getStock from "../controllers/getStock.js";
import createStock from "../controllers/CreateStock.js";
const router = express.Router();

router.get("/get", getStock)
router.post("/create", createStock)
export default router
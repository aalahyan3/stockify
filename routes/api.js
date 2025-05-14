import express from "express";
import getStock from "../controllers/getStock.js";
import createStock from "../controllers/CreateStock.js";
import SignUp from "../controllers/SignUp.js";
import Authentication from "../middlewares/Authentication.js";
import Login from "../controllers/Login.js";
import DeleteStock from "../controllers/Deletetock.js";
import getAllUsers from "../controllers/getAllUsers.js";
const router = express.Router();

router.get("/get", Authentication, getStock)
router.post("/create", Authentication ,createStock)
router.post("/signup", SignUp)
router.post("/login", Login)
router.delete("/delete", Authentication, DeleteStock)
router.get("/users", Authentication, getAllUsers)

export default router

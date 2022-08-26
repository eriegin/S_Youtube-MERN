import express from "express";
import { signin, signup } from "../controllers/auth.js";

const router = express.Router();

/**
 * Create user
 * @param   {Number} num1 The first number
 * @return  {Number}      The total
 */
router.post("/signup", signup);

/**
 * Sign in
 */
router.post("/signin", signin);

/**
 * Google auth
 */
router.post("/google");

export default router;

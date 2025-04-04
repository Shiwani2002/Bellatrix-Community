import express from "express";
import { getAIResponse } from "../controller/qnaController.js";

const router = express.Router();

router.post("/get-answer", getAIResponse); // Route for AI response

export default router;

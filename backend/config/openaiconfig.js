import dotenv from "dotenv";
import OpenAI from "openai";

// Load environment variables
dotenv.config({ path: "./config/config.env" });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is correctly set
});

export default openai;


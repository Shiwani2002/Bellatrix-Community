import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import axios from "axios"; // Ensure axios is installed
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export const getAIResponse = catchAsyncErrors(async (req, res, next) => {
  const { question } = req.body;

  if (!question) {
    return next(new ErrorHandler("Question is required!", 400));
  }

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo", // OpenRouter Model
        messages: [{ role: "user", content: question }],
        max_tokens: 100,
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`, // OpenRouter API Key
          "Content-Type": "application/json",
          "HTTP-Referer": "yourwebsite.com", // Replace with your domain
          "X-Title": "Your App Name"
        }
      }
    );

    res.status(200).json({
      success: true,
      message: response.data.choices[0].message.content.trim(),
    });
  } catch (error) {
    console.error("OpenRouter Error:", error.response ? error.response.data : error.message);
    return next(new ErrorHandler("Failed to get AI response", 500));
  }
});

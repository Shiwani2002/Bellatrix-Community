import { useState } from "react";
import axios from "axios";
import "./QnAComponent.css"; // ✅ Import the external CSS file

const QnAComponent = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const fetchAnswer = async () => {
    if (!query.trim()) {
      setError("Please enter a question!");
      return;
    }
    setError(""); // Clear errors

    try {
      const response = await axios.post(
        "https://bellatrix-community.onrender.com/api/qna/get-answer",
        { question: query },
        { headers: { "Content-Type": "application/json" } }
      );

      setAnswer(response.data.message);
    } catch (err) {
      console.error("Error fetching answer:", err.response?.data || err.message);
      setError("Failed to get an answer. Please try again.");
      setAnswer("");
    }
  };

  return (
    <div className="qna-container">
      <h2 className="qna-title">Ask the Bellatrix AI</h2>
      <input
        type="text"
        placeholder="Ask a question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="qna-input"
      />
      <button onClick={fetchAnswer} className="qna-button">
        Get Answer
      </button>

      {error && <p className="qna-error">{error}</p>}
      {answer && <p className="qna-answer">{answer}</p>}
    </div>
  );
};

export default QnAComponent;

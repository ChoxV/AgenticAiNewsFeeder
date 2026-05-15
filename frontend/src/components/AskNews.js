import { useState } from "react";
import { askNews } from "../services/api";
import AnswerBox from "./AnswerBox";

function AskNews() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!question.trim() || loading) return;

    setLoading(true);
    setAnswer(null);
    setSources([]);

    try {
      const data = await askNews(question);
      setAnswer(data.answer || "No answer found.");
      setSources(data.sources || []);
    } catch (err) {
      setAnswer("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about recent news..."
        />
        <button onClick={handleSubmit} disabled={loading || !question.trim()}>
          {loading ? (
            <span className="btn-loading">
              <span className="spinner" /> Thinking…
            </span>
          ) : (
            "Ask ✦"
          )}
        </button>
      </div>

      {loading && !answer && (
        <div className="loading-container">
          <div className="spinner" />
          <span>Searching the newsverse…</span>
        </div>
      )}

      <AnswerBox answer={answer} sources={sources} />
    </>
  );
}

export default AskNews;
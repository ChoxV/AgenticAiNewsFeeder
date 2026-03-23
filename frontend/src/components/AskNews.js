import { useState } from "react";
import { askNews } from "../services/api";

function AskNews() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async () => {

    const data = await askNews(question);

    setAnswer(data.answer);
  };

  return (
   <div className="search-box">

  <input
    type="text"
    value={question}
    onChange={(e) => setQuestion(e.target.value)}
    placeholder="Ask about recent news..."
  />

  <button onClick={handleSubmit}>
    Ask
  </button>

</div>
  );
}

export default AskNews;
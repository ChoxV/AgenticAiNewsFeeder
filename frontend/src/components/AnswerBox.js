import React from "react";

function AnswerBox({ answer, sources }) {
  if (!answer) return null;

  return (
    <div className="answer-container">
      <div className="answer-header">
        <span className="answer-sparkle">✦</span>
        <span className="answer-label">AI Answer</span>
      </div>

      <p className="answer-text">{answer}</p>

      {sources && sources.length > 0 && (
        <div className="answer-sources">
          <h4>Sources</h4>
          <ul>
            {sources.map((source, index) => (
              <li key={index}>
                <a href={source.link} target="_blank" rel="noreferrer">
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AnswerBox;
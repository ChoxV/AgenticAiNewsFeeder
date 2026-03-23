import React from "react";

function AnswerBox({ answer, sources }) {

  if (!answer) {
    return null;
  }

  return (
    <div style={styles.container}>

      <h3>AI Answer</h3>

      <p style={styles.answerText}>
        {answer}
      </p>

      {sources && sources.length > 0 && (
        <div>

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

const styles = {
  container: {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9"
  },
  answerText: {
    fontSize: "16px",
    lineHeight: "1.5"
  }
};

export default AnswerBox;
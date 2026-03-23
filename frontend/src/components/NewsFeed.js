import React, { useEffect, useState } from "react";

function NewsFeed() {

  const [news, setNews] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8000/news")
      .then(res => res.json())
      .then(data => setNews(data.articles));

  }, []);

  return (

    <div className="news-section">

      <h2>Latest News</h2>

      {news.map((article, index) => (

        <div className="news-card" key={index}>

          <h3>
            <a href={article.link} target="_blank" rel="noreferrer">
              {article.title}
            </a>
          </h3>

          <p className="news-summary">
            {article.summary}
          </p>

        </div>

      ))}

    </div>

  );
}

export default NewsFeed;
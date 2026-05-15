import React, { useEffect, useState } from "react";

function NewsFeed() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = () => {
    setLoading(true);
    setError(null);

    fetch("http://localhost:8000/news")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch news");
        return res.json();
      })
      .then((data) => {
        setNews(data.articles || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="news-section">
      {/* Styled section header */}
      <div className="section-header">
        <span className="section-line" />
        <h2 className="section-title">📡 Latest News</h2>
        <span className="section-line" />
      </div>

      {/* Loading skeleton */}
      {loading && (
        <div className="news-grid">
          {[...Array(4)].map((_, i) => (
            <div className="skeleton-card" key={i}>
              <div className="skeleton-line" />
              <div className="skeleton-line" />
              <div className="skeleton-line" />
            </div>
          ))}
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="error-state">
          <span>⚠️</span>
          <p>{error}</p>
          <button onClick={fetchNews} className="retry-btn">
            Try Again
          </button>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && news.length === 0 && (
        <div className="empty-state">
          <span>📭</span>
          <p>No news articles found right now. Check back soon!</p>
        </div>
      )}

      {/* News cards */}
      {!loading && !error && news.length > 0 && (
        <div className="news-grid">
          {news.map((article, index) => (
            <div className="news-card" key={index}>
              <h3>
                <a href={article.link} target="_blank" rel="noreferrer">
                  {article.title}
                </a>
              </h3>
              <p className="news-summary">{article.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NewsFeed;
from ingestion.fetch_news import fetch_news
from processing.clean_text import clean_text
from rag.summarizer import summarize_article
from database.db import conn, cursor


def run_pipeline():

    articles = fetch_news()

    for article in articles:

        title = article["title"]
        link = article["link"]
        text = clean_text(article.get("summary", ""))

        summary = summarize_article(text)

        cursor.execute(
            "INSERT INTO news (title, link, summary) VALUES (?, ?, ?)",
            (title, link, summary)
        )

    conn.commit()

    print("News pipeline completed")
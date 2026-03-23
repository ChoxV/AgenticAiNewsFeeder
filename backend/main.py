from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ingestion.fetch_news import fetch_news
from rag.summarizer import summarize_article
from processing.clean_text import clean_text

app = FastAPI()

# CORS (important for React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Challa hai bhai!!!!!!"}

@app.get("/news")
def get_news():
    articles = fetch_news()
    articles =  articles[:10]

    summarized_articles = []

    for article in articles:

        cleaned = clean_text(article.get("summary", ""))

        summary = summarize_article(cleaned)

        summarized_articles.append({
            "title": article["title"],
            "link": article["link"],
            "summary": summary
        })

    return {"articles": summarized_articles}
from ingestion.fetch_news import fetch_news
from processing.clean_text import clean_text

articles = fetch_news()

clean_articles = []

for article in articles:

    cleaned_content = clean_text(article["summary"])

    clean_articles.append({
        "title": article["title"],
        "content": cleaned_content
    })
def rag_answer(query):
    query_embedding = model.encode([query])
    retrieved_chunks = vectordb.search(query_embedding)
    context = "\n".join(retrieved_chunks)
    prompt = f"""
    Use the context below to answer.
    Context: 
    {context}
    Question:
    {query}
    """
    answer = llm(prompt)
    return answer
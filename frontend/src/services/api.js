export async function askNews(question) {
    const response = await fetch(
        `http://localhost:8000/ask?query=${encodeURIComponent(question)}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch answer");
    }

    const data = await response.json();
    return data;
}
export async function askNews(question){
    const response = await fetch(
        'https://localhost:8000/ask?query=${question}'
    );
    const data = await response.json();
    return data;
}
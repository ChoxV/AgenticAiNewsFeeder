# Chox The Reporter (AgenticAiNewsFeeder)

A full-stack, AI-powered Nerd News Feeder for tech enthusiasts. It automatically fetches news, summarizes it using state-of-the-art local NLP models, and allows users to ask questions about the news using a custom Retrieval-Augmented Generation (RAG) backend.

## Features

*   **AI Summarization**: Automatically distills lengthy tech articles into digestible summaries.
*   **News QA**: Ask questions and get intelligent answers based on the latest tech news.
*   **Premium Visual Design**: Dark-theme, glassmorphism UI built with modern React.
*   **Fast API Backend**: High-performance backend using Python's FastAPI.

## Architecture

The project is split into two main directories:

### Frontend (`/frontend`)
*   Built with **React 19**
*   Custom CSS design system utilizing glassmorphism, dynamic glow effects, and micro-animations.
*   Responsive interface optimized for clear reading and swift interactions.

### Backend (`/backend`)
*   Built with **FastAPI**
*   **Transformers**: Uses local HuggingFace `transformers` and `torch` (e.g., `sshleifer/distilbart-cnn-12-6`) for fast local text summarization.
*   **RAG Pipeline**: Custom fetch, clean, and embedded QA logic for interacting with the news dataset.

## Setup & Installation

### Backend Setup

1.  Navigate into the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies (it's recommended to use an environment like `conda` or `venv`):
    ```bash
    pip install -r requirements.txt
    ```
    *Note: The backend requires `transformers>=5.0.0` and `torch` for local model inference.*
3.  Start the FastAPI dev server:
    ```bash
    uvicorn main:app --reload
    ```
    *The server will start on http://127.0.0.1:8000*

### Frontend Setup

1.  Navigate into the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the React dev server:
    ```bash
    npm start
    ```
    *The frontend will be accessible at http://localhost:3456 (or whichever port your environment configures).*

## Credits

Powered by RAG • Built with ☕ by Chox

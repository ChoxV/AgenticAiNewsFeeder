import "./styles.css";
import AskNews from "./components/AskNews";
import NewsFeed from "./components/NewsFeed";

function App() {
  return (
    <div className="app-container">
      {/* Hero / Header */}
      <header className="hero">
        <img
          src={process.env.PUBLIC_URL + "/logo-chox.png"}
          alt="Chox The Reporter"
          className="hero-logo"
        />
        <h1 className="hero-title">Chox The Reporter</h1>
        <p className="hero-tagline">AI-powered news — ask anything, stay informed</p>
      </header>

      {/* Search */}
      <div className="search-container">
        <AskNews />
      </div>

      {/* News Feed */}
      <NewsFeed />

      {/* Footer */}
      <footer className="app-footer">
        Powered by RAG &middot; Built with ☕ by Chox
      </footer>
    </div>
  );
}

export default App;
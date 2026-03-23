import "./styles.css";
import AskNews from "./components/AskNews";
import NewsFeed from "./components/NewsFeed";


function App() {

  return (
    <div style={{ padding: "40px" }}>
<center>
      <h1>Nerd News Feeder</h1>
      </center>

      <AskNews />

      <NewsFeed />

    </div>
  );
}

export default App;
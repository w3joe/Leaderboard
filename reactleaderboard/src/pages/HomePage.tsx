import "../components/style.css";
import "./App.css";
import Profile from "../components/Profile";
import { Leaderboard } from "../components/database";

function App() {
  return (
    <>
      <header className="App-header">
        <h1>Leaderboard</h1>
      </header>
      <div className="App">
        <Profile Leaderboard={Leaderboard}></Profile>
      </div>
    </>
  );
}

export default App;

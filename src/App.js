import "./App.css";

import Header from "./components/header";
import GamesCard from "./components/gamesCard";

import GameProvider from "./store/GameProvider";

function App() {
  return (
    <GameProvider>
      <div className="App">
        <Header />
        <GamesCard />
      </div>
    </GameProvider>
  );
}

export default App;

import React, { useState } from "react";

import "./App.css";

import Header from "./components/header";
import GamesCard from "./components/gamesCard";

import GameProvider from "./store/GameProvider";
import Modal from "./UI/modal";

function App() {
  const [showHiddenModal, setShowHiddenModal] = useState(false);

  const showModal = () => {
    setShowHiddenModal(true);
  };

  const hiddenModal = () => {
    setShowHiddenModal(false);
  };

  return (
    <GameProvider>
      <div className="App">
        {showHiddenModal && <Modal />}
        <Header />
        <GamesCard moreInfoHandler={showModal} hiddenMoreInfo={hiddenModal} />
      </div>
    </GameProvider>
  );
}

export default App;

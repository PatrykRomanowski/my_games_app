import React, { useState } from "react";

import "./App.css";

import Header from "./components/header";
import GamesCard from "./components/gamesCard";
import InputNewConsole from "./components/inputs/inputNewConsole";

import GameProvider from "./store/GameProvider";
import Modal from "./UI/modal";

function App() {
  const [showHiddenModal, setShowHiddenModal] = useState(false);
  const [showInputNewConsole, setShowInputNewConsole] = useState(false);

  const showModal = () => {
    setShowHiddenModal(true);
  };

  const hiddenModal = () => {
    setShowHiddenModal(false);
  };

  const onShowInputNewConsoleHandler = () => {
    setShowInputNewConsole(!showInputNewConsole);
  };

  return (
    <GameProvider>
      <div className="App">
        {showHiddenModal && <Modal />}
        <Header
          showInputNewConsole={showInputNewConsole}
          onShowInputNewConsoleHandler={onShowInputNewConsoleHandler}
        />
        {showInputNewConsole && <InputNewConsole />}
        <GamesCard moreInfoHandler={showModal} hiddenMoreInfo={hiddenModal} />
      </div>
    </GameProvider>
  );
}

export default App;

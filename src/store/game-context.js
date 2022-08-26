import React from "react";

const GameContext = React.createContext({
  items: [],
  totalGames: 0,
  addGame: (item) => {},
  initialGame: (item) => {},
});

export default GameContext;

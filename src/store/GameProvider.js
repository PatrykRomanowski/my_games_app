import { useReducer } from "react";
import GameContext from "./game-context";

const defaultGameState = {
  gameCounter: 0,
  items: [],
};

const gameReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateGameCounter = state.gameCounter + 1;

    let updatedItems = [...state.items];
    updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      gameCounter: updateGameCounter,
    };
  }

  return defaultGameState;
};

const GameProvider = (props) => {
  const [gameState, dispatchGameState] = useReducer(
    gameReducer,
    defaultGameState
  );

  const addItemHandler = (item) => {
    dispatchGameState({ type: "ADD", item: item });
  };

  const gameContext = {
    gameCounter: gameState.gameCounter,
    items: gameState.items,
    addItem: addItemHandler,
  };

  return (
    <GameContext.Provider value={gameContext}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;

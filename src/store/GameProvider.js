import { useReducer } from "react";
import GameContext from "./game-context";

const defaultGameState = {
  totalGames: 0,
  items: [],
};

const gameReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updateGameCounter = state.totalGames + 1;

    console.log(action.item);

    const indexOfConsole = state.items.findIndex(
      (item) => item.consoleName === action.item
    );

    state.items[indexOfConsole].totalGames =
      state.items[indexOfConsole].totalGames + 1;

    return {
      items: state.items,
      totalGames: updateGameCounter,
    };
  }

  if (action.type === "DELETE_ITEM") {
    const updateGameCounter = state.totalGames - 1;

    const indexOfConsole = state.items.findIndex(
      (item) => item.consoleName === action.item
    );

    state.items[indexOfConsole].totalGames =
      state.items[indexOfConsole].totalGames - 1;

    return {
      items: state.items,
      totalGames: updateGameCounter,
    };
  }

  if (action.type === "INITIAL_ITEM") {
    const updateGameCounter = state.totalGames + action.item.totalGames;

    let updatedItems = [...state.items];
    updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      totalGames: updateGameCounter,
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
    dispatchGameState({ type: "ADD_ITEM", item: item });
  };

  const initilaItemHandler = (item) => {
    dispatchGameState({ type: "INITIAL_ITEM", item: item });
  };

  const deleteItemHandler = (item) => {
    dispatchGameState({ type: "DELETE_ITEM", item: item });
  };

  const gameContext = {
    totalGames: gameState.totalGames,
    items: gameState.items,
    addGame: addItemHandler,
    initialGame: initilaItemHandler,
    deleteGame: deleteItemHandler,
  };

  return (
    <GameContext.Provider value={gameContext}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;

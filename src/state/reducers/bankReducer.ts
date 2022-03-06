import { ActionType } from "../action-types";
import { Action } from "../actions";

const estadoInicial = 0;

const reducer = (state: number = estadoInicial, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSITO:
      return state + action.payload;
    case ActionType.SAQUE:
      return state - action.payload;
    case ActionType.ZERAR:
      return 0;
    default:
      return state;
  }
};

export default reducer;

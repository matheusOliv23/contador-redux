import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const depositarDinheiro = (valor: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSITO,
      payload: valor,
    });
  };
};

export const sacarDinheiro = (valor: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SAQUE,
      payload: valor,
    });
  };
};

export const ZerarValor = (valor: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ZERAR,
    });
  };
};

import { ActionType } from "../action-types/index";

interface DepositAction {
  type: ActionType.DEPOSITO;
  payload: number;
}

interface SaqueAction {
  type: ActionType.SAQUE;
  payload: number;
}

interface ZerarAction {
  type: ActionType.ZERAR;
}

type Action = DepositAction | SaqueAction | ZerarAction;

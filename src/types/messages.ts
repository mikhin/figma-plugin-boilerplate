export enum MessageTypes {
  SelectionChange = 'Polychrom_SelectionChange',
  UiReady = 'Polychrom_UiReady',
}

export interface MessagePayload<T> {
  payload: T;
  type: MessageTypes;
}

export interface Message<T> {
  pluginMessage: MessagePayload<T>;
}

export interface SelectionChangePayload {
  selectedNodeNames: string[];
}

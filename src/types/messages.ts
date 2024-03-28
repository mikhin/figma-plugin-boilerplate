export enum MessageTypes {
  SelectionChange = 'Plugin_SelectionChange',
  UiReady = 'Plugin_UiReady',
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

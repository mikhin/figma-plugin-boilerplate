import {
  type Message,
  MessageTypes,
  type SelectionChangePayload,
} from '~types/messages.ts';
import { atom, computed, onMount } from 'nanostores';

export const $userSelection = atom<SelectionChangePayload>({
  selectedNodeNames: [],
});

export const $isUserSelectionEmpty = computed($userSelection, (selection) => {
  return selection.selectedNodeNames.length === 0;
});

onMount($userSelection, () => {
  const addMessageListener = (
    event: MessageEvent<Message<SelectionChangePayload>>
  ): void => {
    if (event.data?.pluginMessage.type === MessageTypes.SelectionChange) {
      $userSelection.set(event.data.pluginMessage.payload);
    }
  };

  window.addEventListener('message', addMessageListener);

  return () => {
    window.removeEventListener('message', addMessageListener);
  };
});

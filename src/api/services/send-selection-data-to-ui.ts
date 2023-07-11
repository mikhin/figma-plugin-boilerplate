import { buildMessagePayload } from '~api/services/build-message-payload.ts';
import {
  type MessagePayload,
  MessageTypes,
  type SelectionChangePayload,
} from '~types/messages.ts';

export const sendSelectionDataToUi = (): void => {
  try {
    const messagePayload = buildMessagePayload(figma.currentPage.selection);

    figma.ui.postMessage({
      payload: messagePayload,
      type: MessageTypes.SelectionChange,
    } satisfies MessagePayload<SelectionChangePayload>);
  } catch (error) {
    figma.ui.postMessage({
      payload: {
        selectedNodeNames: [],
      },
      type: MessageTypes.SelectionChange,
    } satisfies MessagePayload<SelectionChangePayload>);
  }
};

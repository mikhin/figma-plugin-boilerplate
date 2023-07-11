import { type SelectionChangePayload } from '~types/messages.ts';

export const buildMessagePayload = (
  currentSelection: readonly SceneNode[]
): SelectionChangePayload => {
  if (currentSelection.length === 0)
    return {
      selectedNodeNames: [],
    };

  return {
    selectedNodeNames: currentSelection.map((node) => node.name),
  };
};

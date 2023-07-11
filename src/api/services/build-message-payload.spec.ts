import { buildMessagePayload } from '~api/services/build-message-payload.ts';
import { describe, expect, test } from 'vitest';

describe('buildMessagePayload', () => {
  test('should return an empty array when there is no selection', () => {
    const currentSelection: SceneNode[] = [];

    expect(buildMessagePayload(currentSelection)).toEqual({
      selectedNodeNames: [],
    });
  });

  test('should return a payload with one node name when one node is selected', () => {
    const currentSelection = [
      { id: '1', name: 'Node1' },
    ] as unknown as SceneNode[];

    expect(buildMessagePayload(currentSelection)).toEqual({
      selectedNodeNames: ['Node1'],
    });
  });

  test('should return a payload with multiple node names when multiple nodes are selected', () => {
    const currentSelection = [
      { id: '1', name: 'Node1' },
      { id: '2', name: 'Node2' },
    ] as unknown as SceneNode[];

    expect(buildMessagePayload(currentSelection)).toEqual({
      selectedNodeNames: ['Node1', 'Node2'],
    });
  });

  test('should handle selection with undefined or null node names', () => {
    const currentSelection = [
      { id: '1', name: null },
      { id: '2', name: 'Node2' },
    ] as unknown as SceneNode[];

    expect(buildMessagePayload(currentSelection)).toEqual({
      selectedNodeNames: [null, 'Node2'],
    });
  });
});

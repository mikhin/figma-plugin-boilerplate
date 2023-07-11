import { useStore } from '@nanostores/react';
import { MessageTypes } from '~types/messages.ts';
import {
  $isUserSelectionEmpty,
  $userSelection,
} from '~ui/stores/user-selection.ts';
import React, { useEffect } from 'react';

export const App: React.FC = () => {
  const userSelection = useStore($userSelection);
  const isUserSelectionEmpty = useStore($isUserSelectionEmpty);

  useEffect(() => {
    parent.postMessage(
      {
        pluginMessage: {
          type: MessageTypes.UiReady,
        },
      },
      '*'
    );
  }, []);

  return (
    <div className="p-4">
      {isUserSelectionEmpty ? (
        <div>
          <h1 className="pb-2 text-xl font-bold text-gray-900">
            Select some nodes
          </h1>
        </div>
      ) : (
        <>
          <h1 className="mb-2 border-b border-gray-200 pb-2 text-xl font-bold text-gray-900">
            Selected nodes names
          </h1>

          <ul>
            {userSelection.selectedNodeNames.map((name) => (
              <li
                className="border-b border-gray-200 py-2 text-sm font-medium text-gray-900 last:border-b-0"
                key={name}
              >
                {name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

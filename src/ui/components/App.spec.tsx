import { render } from '@testing-library/react';
import { App } from '~ui/components/App.tsx';
import { $userSelection } from '~ui/stores/user-selection.ts';
import { describe, expect, test } from 'vitest';

describe('Layout component', () => {
  test('Render empty list', () => {
    expect(render(<App />).container).toMatchSnapshot();
  });

  test('Render list with content', () => {
    $userSelection.set({
      selectedNodeNames: ['Frame 1', 'Frame 2'],
    });

    expect(render(<App />).container).toMatchSnapshot();
  });
});

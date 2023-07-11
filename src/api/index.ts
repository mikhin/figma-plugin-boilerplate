import { sendSelectionDataToUi } from '~api/services/send-selection-data-to-ui.ts';

figma.skipInvisibleInstanceChildren = true;

figma.showUI(__html__, {
  height: 300,
  width: 300,
});

figma.on('selectionchange', sendSelectionDataToUi);
figma.on('run', sendSelectionDataToUi);
figma.on('documentchange', sendSelectionDataToUi);

figma.on('close', () => {
  figma.off('selectionchange', sendSelectionDataToUi);
  figma.off('run', sendSelectionDataToUi);
  figma.off('documentchange', sendSelectionDataToUi);
});

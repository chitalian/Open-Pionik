'use strict';

import { enabledStorage } from './storage';
import { boldifyNode } from './boldify';

function boldifyPage() {
  boldifyNode(document.body);
}
enabledStorage.get((val) => val ? boldifyPage() : null);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'UPDATE') {
    request.payload.enabled ? boldifyPage() : location.reload();
  }

  // Send an empty response
  // See https://github.com/mozilla/webextension-polyfill/issues/130#issuecomment-531531890
  sendResponse({ 'result': `updated state to ${request.payload}` });
  return true;
});

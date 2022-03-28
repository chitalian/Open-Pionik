'use strict';

import './popup.css';
import { enabledStorage } from './storage';


var enableSwitch = document.getElementById("enableSwitch");
enabledStorage.get((val) => { enableSwitch.checked = val; })

enableSwitch.addEventListener('click', () => {
  enabledStorage.set(enableSwitch.checked, () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          type: 'UPDATE',
          payload: {
            enabled: enableSwitch.checked,
          },
        },
        response => {
          console.log(`Set state and got response: ${response}`);
        }
      );
    });
  });
});


'use strict';

const StorageFactory = (settingName) => {
  return {
    get: cb => {
      chrome.storage.sync.get([settingName], result => {
        cb(result.enabled);
      });
    },
    set: (value, cb) => {
      chrome.storage.sync.set(
        {
          enabled: value,
        },
        () => {
          cb();
        }
      );
    },
  };
};

export const enabledStorage = StorageFactory('enabled');
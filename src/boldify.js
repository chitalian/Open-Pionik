'use strict';

import {
  hyphenateSync
} from "hyphen/en";

function _skipWord(word) {
  if (word == undefined || word == null || word.length == 0) return true;
  var firstChar = word.slice(0, 1);
  var isNumber = /^-?\d+$/.test(firstChar);

  return isNumber;
}

function _boldifyWord(word) {
  if (_skipWord(word)) {
    return word;
  }

  if (!word.slice(0, 1).match(/[a-z]/i)) {
    return word.slice(0, 1) + _boldifyWord(word.slice(1));
  }

  var bold;
  var normal;
  const HYPHEN_CHAR = '+';
  var wordHyphened = hyphenateSync(word, { debug: false, hyphenChar: HYPHEN_CHAR, minWordLength: 1 });
  var hyphens = wordHyphened.split(HYPHEN_CHAR)
  if (hyphens.length > 1) {
    var boldCount = Math.floor(hyphens.length / 2.0)
    bold = hyphens.slice(0, boldCount).join('');
    normal = hyphens.slice(boldCount).join('');
  } else if (word.length == 1) {
    bold = word;
    normal = '';
  } else {
    var boldCount = Math.ceil(word.length / 3.0);
    bold = word.slice(0, boldCount);
    normal = word.slice(boldCount);
  }
  return "<b>" + bold + "</b>" + "<span>" + normal + "</span>";
}


function _skipCase(node) {
  if (node.tagName) {
    var tag = node.tagName.toLowerCase();
    return tag == 'script' ||
      tag.startsWith('h') ||
      tag.startsWith('time') ||
      tag.startsWith('li') ||
      tag.startsWith('style') ||
      tag.startsWith('code') ||
      tag.startsWith('nav') ||
      tag.startsWith('svg');
  } else {
    return false;
  }
}

export function boldifyNode(node) {
  if (_skipCase(node)) return;
  if ((node.textContent != undefined) && (node.tagName == undefined)) {
    var bionifiedText = node.textContent.split(" ").map(x => _boldifyWord(x)).join(" ");
    if (bionifiedText.replace(/(\s|\r\n|\n|\r)/gm, "")) {
      var newNode = document.createElement('span');
      newNode.innerHTML = bionifiedText;
      node.replaceWith(newNode);
    }
  }
  if ((node.childNodes != undefined) && (node.childNodes.length > 0)) {
    for (var child of node.childNodes) {
      boldifyNode(child);
    }
  }
}


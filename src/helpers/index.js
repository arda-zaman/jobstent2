import React from 'react';
import { styleList } from '../constants/generalConstants';

export const uuid = () => {
  return String(Date.now() + Math.round(Math.random() * 10000));
};

export const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export const UpperCase = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
}

export const GetAllAttributes = (input) => {
  return [...input.attributes].forEach(attr => attr.nodeName);
}

export const getFieldStyle = (field, useCommon = false) => {
  const styles = getComputedStyle(field);
  const returnedStyles = {};

  if (useCommon) {
    styleList.forEach(sty => {
      returnedStyles[sty] = styles[sty];
    });
  }

  return returnedStyles.length == 0 ? styles : returnedStyles;
};

export const getDimensions = () => {
  return {
    width: global.window.innerWidth,
    height: global.window.innerHeight
  }
};
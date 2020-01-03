import React from 'react';

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
  return [...input.attributes].map(attr => attr.nodeName);
}
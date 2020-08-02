import { useState } from 'react';
import { generate } from 'shortid';

export const useColors = () => {
  const [colors, setColors] = useState([]);
  const addColor = color => {
    const newColor = { id: generate(), color };
    setColors([ newColor, ...colors ]);
  };
  return { colors, addColor };
};
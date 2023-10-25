import React from 'react';
import Delivery from './delivery';
import Price from './price';
import Time from './time';

const FoodIcon = (width: number, height: number) => [
  {name: 'price', icon: <Price width={width} height={height} />},
  {name: 'delivery', icon: <Delivery width={width} height={height} />},
  {name: 'time', icon: <Time width={width} height={height} />},
];

export const FoodIconPack = (
  iconName: string,
  width: number,
  height: number,
) => {
  return FoodIcon(width, height).find(item => {
    return item.name === iconName;
  });
};

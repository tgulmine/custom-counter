import React, { useEffect, useState } from 'react';
import './CounterList.scss';
import Counter from '../Counter/Counter';

interface CounterListProps {
  name: string;
  time: string;
  color: string;
  clickedPlay: Boolean;
}

const CounterList: React.FC<CounterListProps> = props => {
  return <div className="flex">list</div>;
};

export default CounterList;

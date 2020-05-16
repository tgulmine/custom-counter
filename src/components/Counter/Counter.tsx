import * as React from 'react';
import './Counter.scss';

interface CounterProps {
  name: string;
  time: any;
  color: string;
}

const Counter: React.FC<CounterProps> = props => {
  var name = props.name;
  var time = props.time;
  var color = props.color;

  return (
    <div className="flex-row w-10/12">
      <div className="counter-title">{name}</div>
      <div className="counter-title">{time}</div>
      <div className="counter-title">{color}</div>
    </div>
  );
};

export default Counter;

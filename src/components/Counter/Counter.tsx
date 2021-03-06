import React, { useEffect, useState } from 'react';
import './Counter.scss';

interface CounterProps {
  name: string;
  time: string;
  color: string;
  clickedPlay: Boolean;
}

const Counter: React.FC<CounterProps> = props => {
  var name = props.name;
  var time = props.time;
  var color = props.color;

  var hours = parseInt(time.substr(0, 2), 10);
  var minutes = parseInt(time.substr(3, 2), 10);
  if (time.length > 5) var seconds = parseInt(time.substr(6, 2), 10);
  else var seconds = 0;

  var timer = getTimer();

  function addExtraZero(n: Number) {
    if (n < 10) {
      return '0' + n.toString();
    } else {
      return n.toString();
    }
  }

  function getTimer() {
    var h = hours.toString();
    if (hours > 0) var m = addExtraZero(minutes);
    else var m = minutes.toString();
    var s = addExtraZero(seconds);

    if (h === '0' && m === '0') return s;
    else if (h === '0') return m + ':' + s;
    else return h + ':' + m + ':' + s;
  }

  return (
    <div
      className="flex-row w-1/6 ml-4 text-black font-bold p-4 rounded"
      style={{
        backgroundColor: color
      }}
    >
      <div className="flex mb-4">
        <div className="text-6xl mr-auto ml-auto">{name}</div>
      </div>
      <div className="flex mb-4">
        <div className="text-bigTimer ml-auto mr-auto">{timer}</div>
      </div>
    </div>
  );
};

export default Counter;

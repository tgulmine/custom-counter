import * as React from 'react';
import './Counter.scss';

interface CounterProps {
  name: string;
  time: string;
  color: string;
}

const Counter: React.FC<CounterProps> = props => {
  var name = props.name;
  var time = props.time;
  var color = props.color;

  var hours = parseInt(time.substr(0, 2), 10);
  var minutes = parseInt(time.substr(3, 2), 10);
  if (time.length > 5) var seconds = parseInt(time.substr(6, 2), 10);
  else var seconds = 0;

  var timer;

  function addExtraZero(n: Number) {
    if (n < 10) {
      return '0' + n.toString();
    } else {
      return n.toString();
    }
  }

  /*   function setTimer() { */
  var h = addExtraZero(hours);
  var m = addExtraZero(minutes);
  var s = addExtraZero(seconds);

  if (h === '00' && m === '00') timer = s;
  else if (h === '00') timer = m + ':' + s;
  else timer = h + ':' + m + ':' + s;

  /*   } */

  return (
    <div
      className="flex-row w-1/2 ml-8 text-black font-bold p-4 mt-10 mb-10"
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

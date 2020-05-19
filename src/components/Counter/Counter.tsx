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

  const [isCountOver, setIsCountOver] = useState(false);

  var currentHours = hours;
  var currentMinutes = minutes;
  var currentSeconds = seconds;

  const [timer, setTimer] = useState(getTimer());
  var timeout: NodeJS.Timeout;

  useEffect(() => {
    console.log('use');
    if (props.clickedPlay) {
      countDown();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.clickedPlay]);

  function countDown() {
    console.log('ab');
    timeout = setInterval(function() {
      console.log('a');
      console.log(currentSeconds);
      if (currentSeconds === 0 && currentMinutes > 0) {
        console.log('b1');
        currentSeconds = 59;
        currentMinutes--;
      } else if (currentSeconds === 0 && currentMinutes === 0 && currentHours > 0) {
        console.log('b2');
        currentSeconds = 59;
        currentMinutes = 59;
        currentHours--;
      } else if (currentSeconds === 0 && currentMinutes === 0 && currentHours === 0) {
        console.log('b3');
        clearTimeout(timeout);
      } else {
        console.log('b4');
        currentSeconds--;
      }
      setTimer(getTimer());
    }, 1000);
  }

  function addExtraZero(n: Number) {
    if (n < 10) {
      return '0' + n.toString();
    } else {
      return n.toString();
    }
  }

  function getTimer() {
    var h = currentHours.toString();
    if (currentHours > 0) var m = addExtraZero(currentMinutes);
    else var m = currentMinutes.toString();
    var s = addExtraZero(currentSeconds);

    if (h === '0' && m === '0') return s;
    else if (h === '0') return m + ':' + s;
    else return h + ':' + m + ':' + s;
  }

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

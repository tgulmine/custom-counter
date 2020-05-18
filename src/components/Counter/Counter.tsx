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
  var timer;
  /* var currentHours = hours;
  var currentMinutes = minutes; */
  const [currentHours, setCurrentHours] = useState(hours);
  const [currentMinutes, setCurrentMinutes] = useState(minutes);
  const [currentSeconds, setCurrentSeconds] = useState(seconds);
  /* var currentSeconds = seconds; */
  setTimer();

  useEffect(() => {
    console.log('use');
    if (props.clickedPlay) {
      countDown();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.clickedPlay]);

  function countDown() {
    while (!isCountOver) {
      setInterval(function() {
        if (currentSeconds === 0 && currentMinutes > 0) {
          setCurrentSeconds(59);
          setCurrentMinutes(currentMinutes - 1);
        } else if (currentSeconds === 0 && currentMinutes === 0 && currentHours > 0) {
          setCurrentSeconds(59);
          setCurrentMinutes(59);
          setCurrentHours(currentHours - 1);
        } else if (currentSeconds === 0 && currentMinutes === 0 && currentHours === 0) {
          setIsCountOver(true);
        } else {
          setCurrentSeconds(currentSeconds - 1);
        }

        setTimer();
      }, 1000);
    }
  }

  function addExtraZero(n: Number) {
    if (n < 10) {
      return '0' + n.toString();
    } else {
      return n.toString();
    }
  }

  function setTimer() {
    var h = addExtraZero(currentHours);
    var m = addExtraZero(currentMinutes);
    var s = addExtraZero(currentSeconds);

    if (h === '00' && m === '00') timer = s;
    else if (h === '00') timer = m + ':' + s;
    else timer = h + ':' + m + ':' + s;
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

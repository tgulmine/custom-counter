import React, { useState } from 'react';
import './styles/main.scss';
import CreateCounterBox from './components/CreateCounterBox/CreateCounterBox';
import ActiveCounter from './components/ActiveCounter/ActiveCounter';
import PlayButton from './components/PlayButton/PlayButton';
import Counter from './components/Counter/Counter';

const App: React.FC = () => {
  const [isCreated, setIsCreated] = useState(false);
  const [newCounterName, setNewCounterName] = useState(String);
  const [newCounterTime, setNewCounterTime] = useState(String);
  const [newCounterColor, setNewCounterColor] = useState(String);
  const [clickedPlay, setClickedPlay] = useState(false);

  function createCounter(name: any, time: any, color: any) {
    setNewCounterName(name);
    setNewCounterTime(time);
    setNewCounterColor(color);
    console.log(name, time, color);
    setIsCreated(true);
  }

  function clickPlay() {
    setClickedPlay(true);
  }

  return (
    <div>
      <div className="bg-gray-200 w-full h-screen overflow-auto p-4">
        <div className="flex">
          <CreateCounterBox createCounter={createCounter} />
          {isCreated ? (
            <ActiveCounter name={newCounterName} time={newCounterTime} color={newCounterColor} clickedPlay={clickedPlay} />
          ) : null}
          {isCreated ? <PlayButton clickPlay={clickPlay} /> : null}
        </div>
        {/* <div className="flex">
          <Counter name={newCounterName} time={newCounterTime} color={newCounterColor} />
        </div> */}
      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './styles/main.scss';
import CreateCounterBox from './components/CreateCounterBox/CreateCounterBox';
import Counter from './components/Counter/Counter';

const App: React.FC = () => {
  const [isCreated, setIsCreated] = useState(false);
  const [newCounterName, setNewCounterName] = useState(String);
  const [newCounterTime, setNewCounterTime] = useState(null);
  const [newCounterColor, setNewCounterColor] = useState(String);

  function createCounter(name: any, time: any, color: any) {
    setNewCounterName(name);
    setNewCounterTime(time);
    setNewCounterColor(color);
    console.log(name, time, color);
    setIsCreated(true);
  }

  return (
    <div>
      <div className="bg-gray-200 w-full h-screen overflow-auto p-4">
        <div className="w-full flex">
          <CreateCounterBox createCounter={createCounter} />
          {isCreated ? <Counter name={newCounterName} time={newCounterTime} color={newCounterColor} /> : null}
        </div>
      </div>
    </div>
  );
};

export default App;

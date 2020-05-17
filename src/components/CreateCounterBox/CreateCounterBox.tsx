import React, { useState } from 'react';
import './CreateCounterBox.scss';
import ColorBox from '../ColorBox/ColorBox';

interface CreateCounterProps {
  createCounter: (name: any, time: any, color: any) => void;
}

const CreateCounterBox: React.FC<CreateCounterProps> = props => {
  const colorList = [
    '#FBBF54',
    '#EE6B3B',
    '#EC0F47',
    '#A02C5D',
    '#700460',
    '#022C7A',
    '#ABD96D',
    '#15C286',
    '#087353',
    '#045459',
    '#262949',
    '#1A1333'
  ];
  const [activeColor, setActiveColor] = useState(colorList[0]);

  function changeActiveColor(color: any) {
    setActiveColor(color);
    console.log(color);
  }

  function clickCreate() {
    var counterNameElem: HTMLInputElement = document.getElementById('counterName') as HTMLInputElement;
    var counterNameValue: any = counterNameElem.value;
    var counterTimeElem: HTMLInputElement = document.getElementById('counterTime') as HTMLInputElement;
    var counterTimeValue: any = counterTimeElem.value;
    console.log(counterNameValue, counterTimeValue, activeColor);
    if (counterNameValue !== '') props.createCounter(counterNameValue, counterTimeValue, activeColor);
  }

  return (
    <div
      className="flex-row font-bold text-xl w-1/4 rounded p-4"
      style={{
        backgroundColor: activeColor
      }}
    >
      <div className="text-2xl w-full text-black mr-auto ml-auto mb-4">New Counter</div>
      <div className="flex items-center mr-2 mt-2 w-full">
        <div className="text-black text-lg w-1/3 ml-2">Name</div>
        <input
          className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 text-xl leading-tight focus:outline-none focus:shadow-blackOutline"
          id="counterName"
          type="text"
          placeholder="Counter title"
        />
      </div>
      <div className="flex items-center mr-2 mt-2 w-full">
        <div className="text-black text-lg w-1/3 ml-2">Time</div>
        <input
          className="shadow border rounded py-2 px-3 text-gray-700 text-xl leading-tight focus:outline-none focus:shadow-blackOutline"
          type="time"
          id="counterTime"
          step="1"
          defaultValue="00:00:00"
        />
      </div>
      <div className="flex items-center mr-2 mt-2 w-full">
        <div className="text-black text-lg w-1/3 ml-2">Color</div>
        <div className="flex flex-wrap w-2/3">
          {colorList && colorList.map((color, index) => <ColorBox color={colorList[index]} changeActiveColor={changeActiveColor} />)}
        </div>
      </div>
      <div className="flex mt-2">
        <button
          className="bg-black hover:bg-gray-200 hover:text-black text-white text-xl font-bold mr-auto ml-auto py-2 px-4 rounded focus:outline-none focus:shadow-blackOutline"
          type="button"
          onClick={() => clickCreate()}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateCounterBox;

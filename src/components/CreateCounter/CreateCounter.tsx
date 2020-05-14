import * as React from 'react';
import './CreateCounter.scss';
import ColorBox from '../ColorBox/ColorBox';

const CreateCounter: React.FC = () => {
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

  return (
    <div className="flex-row font-bold text-xl ml-4 w-1/4 bg-red-300 rounded p-4 mt-4">
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
          id="createTime"
          step="10"
        />
      </div>
      <div className="flex items-center mr-2 mt-2 w-full">
        <div className="text-black text-lg w-1/3 ml-2">Color</div>
        <div className="flex flex-wrap w-2/3">{colorList && colorList.map((color, index) => <ColorBox color={colorList[index]} />)}</div>
      </div>
      <div className="flex mt-2">
        <button
          className="bg-black hover:bg-gray-200 hover:text-black text-white text-xl font-bold mr-auto ml-auto py-2 px-4 rounded focus:outline-none focus:shadow-blackOutline"
          type="button"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateCounter;

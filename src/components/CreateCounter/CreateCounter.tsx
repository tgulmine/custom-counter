import * as React from 'react';
import './CreateCounter.scss';
import ColorBox from '../ColorBox/ColorBox';

const CreateCounter: React.FC = () => {
  const colorList = [
    '#1A1333',
    '#262949',
    '#045459',
    '#087353',
    '#15C286',
    '#ABD96D',
    '#FBBF54',
    '#EE6B3B',
    '#EC0F47',
    '#A02C5D',
    '#700460',
    '#022C7A'
  ];

  return (
    <div className="flex-row ml-4 w-1/5 bg-red-300 rounded p-4 mt-4">
      <div className="font-bold text-2xl w-full text-black mr-auto ml-auto">New Counter</div>
      <div className="flex items-center mr-2 mt-2">
        <div className="text-black text-lg w-1/3">Name</div>
        <input
          className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="flex items-center mr-2 mt-2">
        <div className="text-black text-lg w-1/3">Time</div>
        <input
          className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="time"
          type="text"
          placeholder="Time"
        />
      </div>
      <div className="flex mt-2">
        <div className="text-black text-lg w-1/3">Color</div>
        <div className="flex flex-wrap justify-between">
          {colorList && colorList.map((color, index) => <ColorBox color={colorList[index]} />)}
        </div>
      </div>
      <div className="flex mt-2">
        <button
          className="bg-black hover:bg-gray-200 hover:text-black text-white text-xl font-bold mr-auto ml-auto py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateCounter;

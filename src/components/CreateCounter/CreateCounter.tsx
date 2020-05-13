import * as React from 'react';
import './CreateCounter.scss';

const CreateCounter: React.FC = () => {
  return (
    <div className="flex-row ml-4 w-1/4 bg-red-300 rounded p-4 mt-4">
      <div className="font-bold text-2xl w-1/2 text-black mr-auto ml-auto">New Counter</div>
      <div className="flex justify-around items-center mr-2">
        <div className="text-black text-lg">Name</div>
        <input
          className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="flex justify-around items-center mr-2">
        <div className="text-black text-lg">Time</div>
        <input
          className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="time"
          type="text"
          placeholder="Time"
        />
      </div>
      <div className="flex">
        <div className="text-black text-lg">Color</div>
      </div>
      <div className="flex">
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

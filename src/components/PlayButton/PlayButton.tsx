import * as React from 'react';
import './PlayButton.scss';

interface PlayButtonProps {
  clickPlay: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = props => {
  return (
    <div className="flex h-16 ml-4">
      <button
        className="bg-black hover:bg-white hover:text-black text-white text-xl font-bold mr-auto ml-auto py-2 px-4 rounded focus:outline-none focus:shadow-blackOutline"
        type="button"
        onClick={() => props.clickPlay()}
      >
        Start
      </button>
    </div>
  );
};

export default PlayButton;

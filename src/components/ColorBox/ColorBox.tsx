import * as React from 'react';
import './ColorBox.scss';

interface ColorBoxProps {
  color: string;
}

const ColorBox: React.FC<ColorBoxProps> = props => {
  var color = props.color;

  return (
    <div
      className="rounded p-3 bg-gray-800 mr-2 mb-2 border-white border-1"
      style={{
        backgroundColor: color
      }}
    />
  );
};

export default ColorBox;

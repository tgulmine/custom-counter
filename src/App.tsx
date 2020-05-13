import * as React from 'react';
import './styles/main.scss';
import CreateCounter from './components/CreateCounter/CreateCounter';

const App: React.FC = () => {
  return (
    <div>
      <div className="bg-gray-200 w-full h-screen overflow-auto">
        <CreateCounter />
      </div>
    </div>
  );
};

export default App;

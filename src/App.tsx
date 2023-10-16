import React from 'react';

import './App.css';
import { Listing } from './components/Listing';
import { DATA } from './consts';

const App: React.FC = () => {
  return <Listing items={DATA} />;
};

export default App;
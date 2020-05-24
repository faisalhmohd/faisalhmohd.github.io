import React from 'react';

import Cursor from './Cursor';
import Window from './Window';

import { CursorAnimationProvider } from './Contexts/CursorAnimationProvider';

import './App.sass';

function App() {
  return (
    <CursorAnimationProvider>
      <div className="App">
        <Cursor/>
        <Window />
      </div>
    </CursorAnimationProvider>
  );
}

export default App;

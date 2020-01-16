import React from 'react';
import Connect from './Components/Connect';

//My Components
import BaseForPage from './Components/BaseForPage';

function App() {
  return (
    <div className="App">
      <BaseForPage>
        <h1>React context api</h1>
      </BaseForPage>
    </div>
  );
}

export default Connect(App);

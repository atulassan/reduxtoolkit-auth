import React, {Fragment} from 'react';
import { createPortal } from 'react-dom';

import './App.css';
import AppRoutes from './Routes';

function Modal() {
  return (
    <div className="modal">
        <h1>CreatePortal uses for modal popups and dialog message, and tooltips</h1>
    </div>
  );
}

function App(props) {
  return (
    <Fragment>
      <div className="App">
          <AppRoutes {...props} />
      </div>
      {createPortal(<Modal />, document.body)}
    </Fragment>         
  );
}

console.log(<Modal />);

export default App;
import React, {Fragment} from 'react';

import './App.css';
import AppRoutes from './Routes';

function App(props) {
  return (
    <Fragment>
      <div className="App">
          <AppRoutes {...props} />
      </div>
    </Fragment>         
  );
}

export default App;
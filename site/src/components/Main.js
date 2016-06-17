import React from 'react';
import SimpleExample from './SimpleExample';

// add in performance tooling in dev
if (process.env.NODE_ENV !== 'production') {
  window.Perf = require('react-addons-perf');
}

class Main extends React.Component {
  render() {
    return (
      <div>
        <SimpleExample />
      </div>
    );
  }
}

export default Main;
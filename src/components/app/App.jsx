import React from 'react';
import FastClick from 'fastclick';
import Events from 'src/utils/events';
import loadJS  from 'src/utils/loadJS';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Events.on(window, 'resize', window.__setFontSize__);
    setTimeout(() => {
      FastClick.attach(document.body);
    }, 100);
  }

  render() {
    console.log(this.props);
    return (
      <div className="app-container">
        1111111111
        {this.props.children}

      </div>
    )
  }
}

export default App;

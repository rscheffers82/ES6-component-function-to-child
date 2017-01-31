import React, { Component } from 'react';
import ToggleAnnotations from './ToggleAnnotations';
import ViewAnnotations from './ViewAnnotations';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      click: undefined
    }
  }

  handleClick = (click) => {
    this.setState({ click: click });
  }

  render() {
    return (
      <div>
        <div className="project-details">
          With three components in this app.
          <ol>
            <li>App.js manages state and passes a handle input function to ToggleAnnotations through props.</li>
            <li>ToggleAnnotations.js receives input (onClick event) and passes calls the function from App.js</li>
            <li>ViewAnnotations.js displays input through props.</li>
          </ol>
          <div className='note'>NOTE: <i>React Component class is used</i></div>
        </div>

        <div className="main">
          <ToggleAnnotations onClick={this.handleClick}/>
          <ViewAnnotations value={this.state.click}/>
        </div>
      </div>
    );
  }
}

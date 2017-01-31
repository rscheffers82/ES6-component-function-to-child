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
        <ToggleAnnotations onClick={this.handleClick}/>
        <ViewAnnotations value={this.state.click}/>
      </div>
    );
  }
}

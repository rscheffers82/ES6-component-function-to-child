import React, { Component } from 'react';
import ToggleAnnotations from './ToggleAnnotations';
import ViewAnnotations from './ViewAnnotations';

export default class App extends Component {
  render() {
    return (
      <div>
        <ToggleAnnotations />
        <ViewAnnotations />
      </div>
    );
  }
}

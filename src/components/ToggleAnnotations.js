import React, { Component } from 'react';

class ToggleAnnotations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    const val = value.target;
    console.log(val);
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleClick} data-value="1">
            View annotation
          </button>
        </div>

        <div>
          <button onClick={this.handleClick}  data-value="2">
            Write annotation
          </button>
        </div>

      </div>

    );
  }
}

export default ToggleAnnotations;

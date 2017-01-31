import React, { Component } from 'react';

class ToggleAnnotations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  onClick(value) {
    const val = value.target;
    const data = val.getAttribute("data-value");
    // document.querySelector('.container'));
    console.log('log from child: ', data);
    this.props.onClick(data);
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.onClick.bind(this)} data-value="1">
            View annotation
          </button>
        </div>

        <div>
          <button onClick={this.onClick.bind(this)} data-value="2">
            Write annotation
          </button>
        </div>

      </div>

    );
  }
}

export default ToggleAnnotations;

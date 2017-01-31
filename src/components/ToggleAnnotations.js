import React, { Component } from 'react';

class ToggleAnnotations extends Component {
  constructor(props) {
    super(props);
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
          <button onClick={this.onClick.bind(this)} data-value="view">
            View annotation
          </button>

          <button onClick={this.onClick.bind(this)} data-value="write">
            Write annotation
          </button>
        </div>

      </div>

    );
  }
}

export default ToggleAnnotations;

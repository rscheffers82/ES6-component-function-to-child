import React, {Component} from 'react';

class ViewAnnotations extends Component {
  constructor(props){
    super(props);
    // declare state if needed
  }
  render() {
    var renderMessage = () => {
      if (this.props.value) {
        return <div><strong>{this.props.value}</strong> was clicked...</div>
      } else {
        return <div>No button is clicked yet...</div>
      }
    }

    return (
      <div className='message'>
        {renderMessage()}
      </div>
    );
  }
}

export default ViewAnnotations;

import React, {Component} from 'react';

class ViewAnnotations extends Component {
  constructor(props){
    super(props);
    // declare state if needed
  }
  render() {
    var renderMessage = () => {
      if (this.props.value) {
        return <div>button -{this.props.value}- was clicked...</div>
      } else {
        return <div>No button is clicked yet...</div>
      }
    }

    return (
      <div>
        {renderMessage()}
      </div>
    );
  }
}

export default ViewAnnotations;

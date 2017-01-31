import React, {Component} from 'react';

class ViewAnnotations extends Component {
  constructor(props){
    super(props);
    // declare state if needed
  }
  render() {
    // const output = props.comments.map( comment => <li key={comment}>{comment}</li>);
    const output = () => {
      return('hello');
    }

    return (
      <div>
        Which button was clicked...
      </div>
    );
  }
}

export default ViewAnnotations;

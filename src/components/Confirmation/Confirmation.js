import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
});

class Confirmation extends Component {
  componentDidMount = () => {
    console.log(this.props.reduxStore.feedbackReducer);
    const body = {
      comment: this.props.reduxStore.feedbackReducer.comment,
      feeling: this.props.reduxStore.feedbackReducer.feeling,
      support: this.props.reduxStore.feedbackReducer.support,
      understanding: this.props.reduxStore.feedbackReducer.understanding
    };
    
  }
  render() {
    return (
      <p></p>
    );
  }
}

export default connect(mapReduxStateToProps)(Confirmation);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
});

class Confirmation extends Component {
  componentDidMount = () => {
    // const body = {
    //   comment: this.props.reduxStore.feedbackReducer.comment,
    //   feeling: this.props.reduxStore.feedbackReducer.feeling,
    //   support: this.props.reduxStore.feedbackReducer.support,
    //   understanding: this.props.reduxStore.feedbackReducer.understanding,
    //   flagged: false
    // };
    console.log(this.props.reduxStore.feedbackReducer);
    axios.post('/feedback', this.props.reduxStore.feedbackReducer)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert('error submitting responses');
        console.log(error);
      })

  }
  render() {
    return (
      <p></p>
    );
  }
}

export default connect(mapReduxStateToProps)(Confirmation);

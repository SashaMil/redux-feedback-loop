import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
});

class Confirmation extends Component {
  componentDidMount = () => {
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
      <div>
        <h3>Thank You!</h3>
        <button><Link to="/">Leave new Feedback</Link></button>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Confirmation);

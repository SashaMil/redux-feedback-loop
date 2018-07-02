import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapReduxStateToProps = reduxStore => ({
  reduxStore
});

class Understanding extends Component {

  constructor() {
    super();
    this.state = {
      understanding: ''
    }
  }

  handleUnderstandingChange = (event) => {
    this.setState({understanding: event.target.value});
    console.log(this.state);
  }

  submitUnderstanding = () => {
    this.props.dispatch({type: 'ADD_UNDERSTANDING', payload: this.state});
  }

  render() {
    return (
      <div>
        <label>How well are you understanding the content? (Rate 1-5)</label>
        <br></br>
        <br></br>
        <input type="number" onChange={this.handleUnderstandingChange}></input>
        <button onClick={this.submitUnderstanding}><Link to="/support">Next</Link></button>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Understanding);

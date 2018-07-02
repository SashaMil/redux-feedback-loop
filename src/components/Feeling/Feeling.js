import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapReduxStateToProps = reduxStore => ({
  reduxStore
});

class Feeling extends Component {

  constructor() {
    super();
    this.state = {
      feeling: ''
    }
  }

  handleFeelingChange = (event) => {
    this.setState({feeling: event.target.value});
    console.log(this.state);
  }

  submitFeeling = () => {
    this.props.dispatch({type: 'ADD_FEELING', payload: this.state});
  }

  render() {
    return (
      <div>
        <label>How are you feeling today?</label>
        <input type="number" onChange={this.handleFeelingChange}></input>
        <button onClick={this.submitFeeling}><Link to="/understanding">Next</Link></button>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Feeling);

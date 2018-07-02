import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapReduxStateToProps = reduxStore => ({
  reduxStore
});

class Support extends Component {

  constructor() {
    super();
    this.state = {
      support: ''
    }
  }

  handleSupportChange = (event) => {
    this.setState({support: event.target.value});
    console.log(this.state);
  }

  submitSupport = () => {
    this.props.dispatch({type: 'ADD_SUPPORT', payload: this.state});
  }

  render() {
    return (
      <div>
        <label>How well are you being supported? (Rate 1-5)</label>
        <br></br>
        <br></br>
        <input type="number" onChange={this.handleSupportChange}></input>
        <button onClick={this.submitSupport}><Link to="/comment">Next</Link></button>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Support);

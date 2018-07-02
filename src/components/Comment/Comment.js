import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapReduxStateToProps = reduxStore => ({
  reduxStore
});

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      comment: ''
    }
  }

  handleCommentChange = (event) => {
    this.setState({comment: event.target.value});
    console.log(this.state);
  }

  submitComment = () => {
    this.props.dispatch({type: 'ADD_COMMENT', payload: this.state});
  }

  render() {
    return (
      <div>
        <label>Any comments you want to leave?</label>
        <br></br>
        <br></br>
        <input onChange={this.handleCommentChange}></input>
        <button onClick={this.submitComment}><Link to="/confirmation">Next</Link></button>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Comment);

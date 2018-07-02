import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './comment.css';

// Material UI
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

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
        <Card>
          <CardContent>
            <h3>Any comments you want to leave?</h3>
          </CardContent>
          <CardActions>
            <input onChange={this.handleCommentChange}></input>
            <button onClick={this.submitComment}><Link to="/confirmation">Next</Link></button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Comment);

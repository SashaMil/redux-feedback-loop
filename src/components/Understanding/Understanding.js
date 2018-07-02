import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

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
        <Card>
          <CardContent>
            <h3>How well are you understanding the content? (Rate 1-5)</h3>
          </CardContent>
          <CardActions>
            <input type="number" onChange={this.handleUnderstandingChange}></input>
            <button onClick={this.submitUnderstanding}><Link to="/support">Next</Link></button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Understanding);

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
        <Card>
          <CardContent>
            <h3>How are you feeling today? (Rate 1-5)</h3>
          </CardContent>
          <CardActions>
            <input type="number" onChange={this.handleFeelingChange}></input>
            <button onClick={this.submitFeeling}><Link to="/understanding">Next</Link></button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Feeling);

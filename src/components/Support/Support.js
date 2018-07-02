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
        <Card>
          <CardContent>
            <h3>How well are you being supported? (Rate 1-5)</h3>
          </CardContent>
          <CardActions>
            <input type="number" onChange={this.handleSupportChange}></input>
            <button onClick={this.submitSupport}><Link to="/comment">Next</Link></button>
          </CardActions>
        </Card>

      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Support);

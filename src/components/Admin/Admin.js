import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './Admin.css';

// Material Table Parts
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const mapReduxStateToProps = reduxStore => ({
  reduxStore
})

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      feedbackList: []
    }
  }

  componentDidMount = () => {
    this.getAllEntries();
  }

  getAllEntries = () => {
    axios.get('/feedback')
    .then(response => {
      console.log('Retrieved entries', response.data);
      this.setState({feedbackList: response.data})
    })
    .catch(error => {
      alert('Error retrieving entries')
    });
  }

  flaggedEntry = (id, flag) => {
    if (flag === true) {
      flag = false;
    }
    else if (flag === false) {
      flag = true;
    }
    else {
      flag = true;
    }
    console.log(flag);
    axios.put(`/feedback`, {ider: id, flagger: flag})
      .then(response => {
        console.log('Flagged entry');
        this.getAllEntries();
      })
      .catch(error => {
        alert('Unable to flag entry at this time');
      });
  }

  deleteEntry = (id) => {
    axios.delete(`/feedback/${id}`)
      .then(response => {
        console.log(`Deleted Entry from database`);
        this.getAllEntries();
      })
      .catch(error => {
        console.log(`Error deleting entry from database`, error);
      })
  }

  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Date
              </TableCell>
              <TableCell>
                Feeling
              </TableCell>
              <TableCell>
                Comprehension
              </TableCell>
              <TableCell>
                Support
              </TableCell>
              <TableCell>
                Comments
              </TableCell>
              <TableCell>
                Delete
              </TableCell>
              <TableCell>
                Flag
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.feedbackList.map(entry => {
              return (
                <TableRow key={entry.id} style={{backgroundColor: entry.flagged? 'red' : 'white'}}>

                  <TableCell>
                    {entry.date}
                  </TableCell>
                  <TableCell>
                    {entry.feeling}
                  </TableCell>
                  <TableCell>
                    {entry.understanding}
                  </TableCell>
                  <TableCell>
                    {entry.support}
                  </TableCell>
                  <TableCell>
                    {entry.comments}
                  </TableCell>
                  <TableCell>
                    <button onClick={() => {this.deleteEntry(entry.id)}}>Remove</button>
                  </TableCell>
                  <TableCell>
                    <button onClick={() => {this.flaggedEntry(entry.id, entry.flagged)}}>Flag/Unflag Entry</button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Admin);

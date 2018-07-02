import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// Redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

const feedbackReducer = (state = {flagged: 'false'}, action) => {
  if (action.type === 'ADD_FEELING') {
    return {
      ... state,
      feeling: action.payload.feeling
    }
  }
  else if (action.type === 'ADD_UNDERSTANDING') {
    return {
      ... state,
      understanding: action.payload.understanding
    }
  }
  else if (action.type === 'ADD_SUPPORT') {
    return {
      ... state,
      support: action.payload.support
    }
  }
  else if (action.type === 'ADD_COMMENT') {
    return {
      ... state,
      comment: action.payload.comment
    }
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feedbackReducer
  }),
  applyMiddleware(logger)
);


ReactDOM.render(<Provider store={ storeInstance }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

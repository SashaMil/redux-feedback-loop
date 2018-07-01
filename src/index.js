import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// Redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

const feedbackReducer = (state = {}, action) => {
  if (action.type === 'ADD_FEELING') {
    return {
      ... state,
      feeling: action.payload
    }
  }
  else if (action.type === 'ADD_UNDERSTANDING') {
    return {
      ... state,
      understanding: action.payload
    }
  }
  else if (action.type === 'ADD_SUPPORT') {
    return {
      ... state,
      support: action.payload
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

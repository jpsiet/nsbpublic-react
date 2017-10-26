import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from './epics';
import  actions from './actions';
import {createLogger} from 'redux-logger';
import './index.css';
import customRouter from './router';

 const epicMiddleware = createEpicMiddleware(rootEpic);
 const middlewares = [epicMiddleware];
 // Note logger should be in last As per GuideLine
 if (process.env.NODE_ENV === `development`) {
  const logger = createLogger();

  middlewares.push(logger);
}

const store = createStore(reducers,applyMiddleware(...middlewares));
store.dispatch(actions.fetchStudent())

ReactDOM.render( <Provider store={store}>
           {customRouter()}
	</Provider>,document.getElementById('root'));


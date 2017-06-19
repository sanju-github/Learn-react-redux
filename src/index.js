/*
1.on top of redux we have webpack,redux router,react router,redux promis,redux thunk,hot reloading.
2. Application is combination of: Data contianed in the application + views contained in the application.
3. Redux is data + react is views = Application
4. All the application data is contained in single javascript object. Which is refered to as  application state and it is maintained by redux.
5. React has component level state and redux has application level state.
6. example of counter: + for increase of counter and - for decrease (+,- are components). And value to show the counter value in another component. But data here which is current value of counter is contained in redux.
7.Reducers: is a function that returns a piece of the application state. we can have many pieces of state so we can have many reducers. Like data in a application can have different types of data in the sense different pieces of state so for every type of data (every piece) we have respective reducer. so combining all the states of reducers produce application level state. reducer are key/value pair. Value is produced by reducer. we map value to the key to get state.

*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
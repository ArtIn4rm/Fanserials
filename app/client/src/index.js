import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'materialize-css'
import './sass/styles.scss'
import UserState from './service/UserState'
import SeriesState from './service/routines/SeriesState'
import SerialState from './service/SerialState'

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserState(),
    series: new SeriesState(),
    serial: new SerialState(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
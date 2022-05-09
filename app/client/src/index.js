import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'materialize-css'
import './sass/styles.scss'
import UserState from './service/UserState'
import SeriesState from './service/routines/SeriesState'
import SerialState from './service/SerialState'
import SeriaState from './service/SeriaState'
import SearchState from './service/routines/SearchState'
import PopularState from './service/routines/PopularState'
import NewestState from './service/routines/NewestState'
import OrdersState from './service/routines/OrdersState'
import AccountState from './service/user/AccountState'
import AdminState from './service/user/AdminState'

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserState(),
    series: new SeriesState(),
    serial: new SerialState(),
    seria: new SeriaState(),
    matches: new SearchState(),
    popular: new PopularState(),
    newest: new NewestState(),
    orders: new OrdersState(),
    account: new AccountState(),
    admin: new AdminState(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
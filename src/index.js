import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  contacts: [
    {
      id: 1,
      name: 'Виталий'
    },
    {
      id: 2,
      name: 'Андрей'
    },
    {
      id: 3,
      name: 'Михаил'
    },
  ],
  isActive: false
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addcontact':
      return '';
    default:
      return state
  }
}

const store = createStore(reducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



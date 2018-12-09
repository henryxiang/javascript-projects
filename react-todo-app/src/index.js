import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import 'todomvc-app-css/index.css';
// import AppContextProvider from './AppContextProvider';
import App from './App';
import AppContext from './store/appContext';
import registerServiceWorker from './registerServiceWorker';

const appContext = new AppContext();
appContext.todoItems = [
  { id: 1, name: 'Learn JavaScript', completed: true },
  { id: 2, name: 'Buy a unicorn', completed: false },
];

const root = (
  <Provider appContext={appContext}>
    <App />
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();

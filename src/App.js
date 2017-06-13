import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
// import LoginForm from './components/LoginForm';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD15GrxSq41xu8gRfrm6Yb-adz1PNSZpmY',
      authDomain: 'manager-b76c3.firebaseapp.com',
      databaseURL: 'https://manager-b76c3.firebaseio.com',
      projectId: 'manager-b76c3',
      storageBucket: 'manager-b76c3.appspot.com',
      messagingSenderId: '175661681291'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
        {/* <LoginForm /> */}
      </Provider>
    );
  }
}

export default App;

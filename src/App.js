import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAIzxO-XLpq6QlQHyPCslAWWCi4WGj27hE',
      authDomain: 'employee-manager-8b68c.firebaseapp.com',
      databaseURL: 'https://employee-manager-8b68c.firebaseio.com',
      projectId: 'employee-manager-8b68c',
      storageBucket: '',
      messagingSenderId: '651766821191'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </Provider>
    );
  }
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router } from 'react-native-router-flux'
import { connect, Provider } from 'react-redux';

import Login from './components/Login';
import Home from './components/Home';
import Product from './components/Product';

import store from './store';

const RouterWithRedux = connect()(Router);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="login" initial={true} component={Login} title="Login" hideNavBar={true} />
            <Scene key="home" component={Home} title="Home" hideNavBar={true} />
            <Scene key="product" component={Product} title="Product" hideNavBar={true} />
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('olz', () => App);

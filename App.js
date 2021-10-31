import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import thunk from 'redux-thunk';
import MainNavigation from './src/navigation/MainNavigation';
import { BreakingBadReducer } from './src/store/reducer';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';

const reducer = combineReducers({
  BBReducer: BreakingBadReducer
});
const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {

  const [loaded] = useFonts({
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    RobotoLight: require('./assets/fonts/Roboto-Light.ttf'),
    RobotoThin: require('./assets/fonts/Roboto-Thin.ttf'),

  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}


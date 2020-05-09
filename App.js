import React from 'react';
import PrimaryNav from './src/Navigation/app-navigation';
//import {Provider} from 'react-redux';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import createStore from './create-store';
import Toast from './src/Components/Toast';

// create our store
const {store} = createStore();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#BF1F2F',
    accent: '#BF1F2F',
    text: '#400A10',
  },
};
const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <PrimaryNav />
        <Toast />
      </PaperProvider>
    </Provider>
  );
};

export default App;

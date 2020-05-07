import React from 'react';
import PrimaryNav from './src/Navigation/app-navigation';
//import {Provider} from 'react-redux';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

// create our store
//const { store, persistor } = createStore();

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
    <PaperProvider theme={theme}>
      <PrimaryNav />
    </PaperProvider>
  );
};

export default App;

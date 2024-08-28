// This is your main application file.
import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react' 
import { BrowserRouter, Route } from 'react-router-dom';
import ThemeRoutes from './Router/index';
import { Provider } from 'react-redux';
import  Store  from './redux/store';
type AppProps = {
    message: string;
};


const App = ({ message }: AppProps): JSX.Element => {
    const theme = createTheme({
        typography: {
          fontFamily: 'Open Sans, sans-serif',
        },
      });
    return (
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <ThemeRoutes/>
          </ThemeProvider>
          </Provider>
 );
};

export default App;

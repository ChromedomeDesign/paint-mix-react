// This is your main application file.
import React from 'react' 
import { BrowserRouter, Route } from 'react-router-dom';
import ThemeRoutes from 'Router';
type AppProps = {
    message: string;
};

const App = ({ message }: AppProps): JSX.Element => {
    return (
       <BrowserRouter>
          <ThemeRoutes/>
       </BrowserRouter>
    );
};

export default App;

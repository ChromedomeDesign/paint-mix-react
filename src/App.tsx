// This is your main application file.
import React from 'react' // Importing the core React library

import { BrowserRouter, Route } from 'react-router-dom';
import ThemeRoutes from 'Router';

// This is a simple variable type definition. With Typescript, we should define our variables as strictly as we can so that the tooling can
// detect type mismatches in real time. This will also provide us with verbose feedback at runtime if dynamic data is mismatched with the
// expected data types
type AppProps = {
    message: string;
};

// This is the function component that represnts the application scope
const App = ({ message }: AppProps): JSX.Element => {
    // The return statement below represents the TSX element that will render as HTML to the page.
    return (
       <BrowserRouter>
          <ThemeRoutes/>
       </BrowserRouter>
    );
};

// This export statement is required for the component to be imported elsewhere
export default App;

import React from 'react';
import ReactDOM from 'react-dom';
//Material-UI
import { ThemeProvider } from '@material-ui/core/styles';
// Apollo GraphQL
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
// React Router
import { BrowserRouter as Router } from "react-router-dom";

//Local
import './index.css';
import App from './App';
import theme from './theme';

const client = new ApolloClient({
  uri: 'https://api-ap-northeast-1.graphcms.com/v2/ckrichjv70thm01xs5rg947wm/master',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


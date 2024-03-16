import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { ChakraProvider } from '@chakra-ui/react'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>


    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryParamProvider>


  </BrowserRouter >

);

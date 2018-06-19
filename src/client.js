import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Index from './Index';

const index = (
  <Index Router={BrowserRouter}/>
);

hydrate(index, document.getElementById('app'));
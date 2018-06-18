import React from 'react';
import { hydrate } from 'react-dom';

import Index from './Index';

const index = (
  <Index />
);

hydrate(index, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './app/config/routes';

import injectTapEventPlugin from 'react-tap-event-plugin';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);
import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime'

import {App} from './components/App';
import {PageContents} from './components/PageContents'

ReactDOM.render(
	<App />,
	// <PageContents />,
	document.getElementById('root')
)

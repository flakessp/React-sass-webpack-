import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/MyComponent';

import './index.scss';

ReactDOM.render(React.createElement(MyComponent, {title: 'hey'}), document.getElementById('root'));

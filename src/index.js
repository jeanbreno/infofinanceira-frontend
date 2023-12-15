/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';

ReactDOM.render(<App />, document.getElementById('root'));
*/

import React from 'react';
import App from './main/App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App tab="home" />);
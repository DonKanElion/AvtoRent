import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
// import {store, persistor} from './components/redux/store.js';
// import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </PersistGate> */}
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//      <Provider store={store}>
//       <BrowserRouter basename="/auto-service">
//         <PersistGate loading={null} persistor={persistor}>
//           <App />
//         </PersistGate>
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );

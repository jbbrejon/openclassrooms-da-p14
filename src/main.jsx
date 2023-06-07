// Import dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

// Import React Router config
import ReactRouter from './routes/ReactRouter/ReactRouter.jsx'

// Import Redux store
import store from './redux/store/store';

// Import index CSS
import './index.css'

// Set persistor (Redux Persist)
let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={ReactRouter} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)

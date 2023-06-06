// Import dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

// Import React Router config
import ReactRouter from './routes/ReactRouter/ReactRouter.jsx'

// Import index CSS

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ReactRouter} />
  </React.StrictMode>,
)

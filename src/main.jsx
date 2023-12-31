import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Route from './Main/Route/Route'

const [router, RouterProvider] = Route

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)

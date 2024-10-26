import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './routers/router.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.js'
import  'sweetalert2/src/sweetalert2.js'

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <RouterProvider router={router} />
  </Provider>,
)

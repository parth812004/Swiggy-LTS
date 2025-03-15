import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import appRouter from './routing/appRouter.jsx'

// RouterProvider is used to connect main.jsx with our provided routes
createRoot(document.getElementById('root')).render(

    <RouterProvider router={appRouter} />

)

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sorted from './components/ui/Files/Sorted.jsx'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/SortBy/:id',
    element: <Sorted />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sorted from './components/ui/Files/Sorted.jsx'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

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
const queryclient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryclient}  >
    <RouterProvider router={router} />
    
  </QueryClientProvider>
)

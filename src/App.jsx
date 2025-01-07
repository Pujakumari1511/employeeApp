import './App.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './routes/AppRoutes.jsx'


function App() {

  return <RouterProvider router={Router} />
}

export default App;

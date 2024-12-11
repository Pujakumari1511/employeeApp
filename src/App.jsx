import './App.css'
import LogInLogOut from './components/LogIn/LogIn.jsx';
import { RouterProvider } from 'react-router-dom'
import { Router } from './routes/AppRoutes.jsx'

function App() {

  return <RouterProvider router={Router} />
}

export default App;

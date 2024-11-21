import './App.css'
import LogInLogOut from './components/logInLogOut/LogInLogOut.jsx';
import { RouterProvider } from 'react-router-dom'
import { Router } from 'react-router-dom'

function App() {

  return <RouterProvider router={Router} />
}

export default App;

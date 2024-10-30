import './App.css'

import EmployeeList from './components/EmployeeList.jsx'
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'

function App() {

  return (
    <>
      <div>
        <Header/>
        <main>
          <EmployeeList />
        </main>
        <Footer/> 
      </div>
    </>
  );
}

export default App;

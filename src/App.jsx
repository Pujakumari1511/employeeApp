import './App.css'
import LogInLogOut from './components/logInLogOut/LogInLogOut.jsx';
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'

function App() {

  return (
    <>
      <div>
        <Header/>
        <main>
          <LogInLogOut />
        </main>
        <Footer/> 
      </div>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NavBar from './Components/Home/NavBar/NavBar';

function App() {
  return (
    <>
      <Home></Home>
      {/* <NavBar></NavBar> */}
      <About/>
    </>
  );
}

export default App;

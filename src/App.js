import './App.css';
import NavBar from './Components/Navbar/navBar';
import Footer from './Components/Footer/footer';
import HomeScreen from './Components/HomeScreen/homeScreen';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomeScreen/>
      <Footer/>
    </div>
  );
}

export default App;

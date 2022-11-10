import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

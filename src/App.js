import './App.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Card from './components/layout/Card';
import Filter from './components/layout/Filter';
import Header from './components/layout/Header';
import Search from './components/layout/Search';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <Filter></Filter>
      <Card></Card>
      <Footer></Footer>

    </div>
  );
}

export default App;

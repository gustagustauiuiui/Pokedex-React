import './App.css';
import Card from './components/Card';
import Filter from './components/Filter';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <Filter></Filter>
      <Card></Card>
    </div>
  );
}

export default App;

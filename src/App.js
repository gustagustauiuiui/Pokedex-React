import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <Filter></Filter>
    </div>
  );
}

export default App;

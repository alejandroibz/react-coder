import './App.css';
import { Navbar } from './components/navbar/navbar'
import { ItemListContainer } from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <div className='App'>
      <header className="headerIndex">
        <Navbar />
        <ItemListContainer />
      </header>

    </div>
  );
}



export default App;


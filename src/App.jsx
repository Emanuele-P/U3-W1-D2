import './App.css';
import AllTheBooks from './components/AllTheBooks';
import MyAlert from './components/MyAlert';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';

function App() {
  return (
    <div className="App">
      <header>
        <MyNav></MyNav>
      </header>

      <main>
      <MyAlert></MyAlert>
      <AllTheBooks></AllTheBooks>
      </main>

      <MyFooter></MyFooter>
    </div>
  );
}

export default App;

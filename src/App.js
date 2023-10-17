import './App.css';
import Header from './components/Header';
import CalculatorIMC from './components/IMC';
import Login from './components/Login/LoginControl'


function App() {
  return (
    <div className="App">
      <Header title="Título do APP" />
      <CalculatorIMC />

    <Login name={'Miguel'} />

    </div>
  );
}

export default App;

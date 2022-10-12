import './App.css';
import Questao1 from './components/Questao1';
import Questao1A from './components/Questao1A';
import Questao1B from './components/Questao1B';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Questao1>
            <Questao1A/>
            <Questao1B/>
        </Questao1>
      </header>
    </div>
  );
}

export default App;

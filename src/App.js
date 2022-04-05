import './App.css';
import StateCounter from './StateCounter';
import TextOnChange from './TextOnChange';
import TwoUseStates from './TwoUseStates';
import CountingWithReducer from './CountingWithReducer';

function App() {
  return (
    <div className="App">
      <StateCounter />
      <TextOnChange />
      <TwoUseStates />
      <CountingWithReducer />
    </div>
  );
}

export default App;

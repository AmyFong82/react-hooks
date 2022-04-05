import './App.css';
import StateCounter from './StateCounter';
import TextOnChange from './TextOnChange';
import TwoUseStates from './TwoUseStates';
import CountingWithReducer from './CountingWithReducer';
import EffectTutorial from './EffectTutorial';

function App() {
  return (
    <div className="App">
      <StateCounter />
      <TextOnChange />
      <TwoUseStates />
      <CountingWithReducer />
      <EffectTutorial />
    </div>
  );
}

export default App;

import './App.css';
import StateCounter from './StateCounter';
import TextOnChange from './TextOnChange';
import TwoUseStates from './TwoUseStates';
import CountingWithReducer from './CountingWithReducer';
import EffectTutorial from './EffectTutorial';
import RefTutorial from './RefTutorial';

function App() {
  return (
    <div className="App">
      <StateCounter />
      <TextOnChange />
      <TwoUseStates />
      <CountingWithReducer />
      <EffectTutorial />
      <RefTutorial />
    </div>
  );
}

export default App;

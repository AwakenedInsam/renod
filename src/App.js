import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './component/Navi';
import Portfolio from './component/Portfolio';
import Process from './component/Process';
import './App.css';

function App() {
  return (
    <div>
      <Navi></Navi>
      <Portfolio></Portfolio>
      <Process></Process>
    </div>
  );
}

export default App;

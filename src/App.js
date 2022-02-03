import './App.css';
//import SiderDemo from './components/SiderDemo';
import {useState} from 'react';
import Navigator from './components/Navigator';

function App() {

  const [expanded, collapsed] = useState(false)

  return (
    <div className="App">
      <Navigator onExpanded={() => collapsed(!expanded)} 
      expand={expanded}/>
      {/*<SiderDemo/>*/}
    </div>
  );
}

export default App;

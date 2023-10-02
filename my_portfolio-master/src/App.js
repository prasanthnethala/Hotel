import { Outlet } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">

<Home/>

<Outlet/>
    </div>
  );
}

export default App;

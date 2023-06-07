import Navbar from './components/Navbar';
import './App.css';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="">
     <Navbar/>
     <Outlet/>
    </div>
  );
}

export default App;

import './App.css';

import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Main from './Main';
import View from './Admin/View';
import Userview from './User/Userview';
import Empform from './Admin/Empform';
import Menu from './Menu';



function App() {
  return (
    <div>
     

      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/view" element={<Main child = {<View/>}/>}></Route>
        <Route path="/userview" element={<Menu child = {<Userview/>}/>}></Route>
        <Route path="/empform" element={<Main child = {<Empform/>}/>}></Route>


      </Routes>
    </div>
  );
}

export default App;
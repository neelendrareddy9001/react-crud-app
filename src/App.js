import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { GlobalProvider } from './context/GlobalState';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div style={{maxWidth: '30rem', margin: '4rem auto'}}>
    <GlobalProvider>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<AddUser/>}/>
            <Route path='/edit/:id'  element={<EditUser/>}/>
        </Routes>
    </GlobalProvider>
    </div>
  );
}

export default App;

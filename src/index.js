import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import Detail from './Detail';  
import Layout from './Layout';
import AddData from './AddData';
import Information from './Information';
import Temp from './Temp';
import EditInfo from './EditInfo';
import { BrowserRouter, Route, Routes }  from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <>
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/Detail' element={<Detail/>}></Route>
          <Route path='/Detail/AddData' element={<AddData/>}></Route>
          <Route path='/Detail/Information/:id' element={<Information/>}></Route>
          <Route path='/Detail/EditInfo/:id' element={<EditInfo/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);



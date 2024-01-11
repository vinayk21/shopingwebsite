import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Componets/Nav'; 
import Footer from './Componets/Footer';
import { useState } from 'react';
import Signup from './Componets/Signup';
import Product from './Componets/Product';
function App() {
  const [singin,setsingin] = useState(true)
  return (
    <div className="App">
     {singin ? <> 
       <Nav/>
       <Routes>
       <Route path='/product' element={<Product/>}/>
        <Route path='/addproducts' element={""}/>
        <Route path='/updateproduct' element={""}/>
        <Route path='/logout' element={""}/>
        <Route path='/profile' element={""}/>
        <Route path='/singup' element={<Signup/>}/>
      </Routes>
     <Footer/>   
     </>
     : 
     <Routes>
      <Route path='/' element={"hello"}/>
     </Routes>
}
    </div>
  );
}

export default App;

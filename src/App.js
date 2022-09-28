
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './Card';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from './Cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav/>}>

      <Route index element={<Card/>}></Route>
      <Route path='cart' element={<Cart/>}></Route>
        </Route>
      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;

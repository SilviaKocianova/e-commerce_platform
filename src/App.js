
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<shopCategory category="men"/>}/>
        <Route path='/womens' element={<shopCategory category="women"/>}/>
        <Route path='/kids' element={<shopCategory category="kid"/>}/>

        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>

      </Routes>

      </BrowserRouter>
   
   
    </div>
  );
}

export default App;


/*29:08*/
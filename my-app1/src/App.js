
import './App.css';
import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import Hotel from './Pages/hotel/Hotel';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

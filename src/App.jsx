import './index.css';
import Nav from './components/Nav';
import { BrowserRouter, HashRouter, Route, Router, Routes } from 'react-router-dom';
import  Characteristics from './components/Characteristics';
import Habitat from './components/Habitat';
import Adaptations from './components/Adaptations';
import Home from './components/Home';

function App() {

  return (
    <>
          <Routes >
            <Route  path='/' element={<Home />}/>
            <Route  path='/Characteristics' element={<Characteristics />}/>
            <Route  path='/Habitat' element={<Habitat />}/>
            <Route  path='/Adaptations' element={<Adaptations />} />
          </Routes>
        <Nav />

    
    </>
  )
}

export default App

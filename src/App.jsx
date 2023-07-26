import React from 'react';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Vans from './pages/Vans';
import About from './pages/About';
import Home from './pages/Home';
import './server';
import VanDetail from './pages/VanDetail';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import HostLayout from './components/HostLayout';
import Income from './pages/Host/Income';
import Review from './pages/Host/Review';
import HostVans from './pages/Host/HostVans';
import HostVanDetail from './pages/Host/HostVanDetail';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanInfo from './pages/Host/HostVanInfo';



function App() {
  return (


    <BrowserRouter>
   

    <Routes>
      <Route path='/'  element={<Layout/>}>
      <Route index  element={<Home/>} />
    
      <Route path='about' element={<About/>} />
      <Route path='vans' element={<Vans/>} />
      <Route path='vans/:id' element={<VanDetail/>} />
    
      <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="reviews" element={<Review />} />
      <Route path='vans' element={<HostVans/>} />


      <Route path='vans/:id' element={<HostVanDetail/>} >
      <Route index element={<HostVanInfo/>}/>
      <Route path='pricing' element={<HostVanPricing/>}/>
      <Route path='photos' element={<HostVanPhotos/>}/>
      </Route>
      </Route>
      </Route>
         
    </Routes>
    </BrowserRouter>
  );
}

export default App;

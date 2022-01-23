import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../components/Home';
import { Descripcion } from '../components/Descripcion';
import { Header } from '../components/Header';

export const AppRoute = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/descripcion' element={<Descripcion/>}/>
            <Route path='/*' render={ <Navigate replace to="/" /> } />
        </Routes>
    </BrowserRouter>    
  )
};

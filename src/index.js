import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Contenedor from './Elements/Contenedor'
import EditarGastos from './Components/EditarGastos';
import GastosPorCategoria from './Components/GastosPorCategoria';
import IniciarSesion from './Components/InicioSesion';
import ListaDeGastos from './Components/ListaDeGastos';
import RegistroDeUsuarios from './Components/RegistroUsuario';
import {Helmet} from "react-helmet";
import favicon from './img/logo.png';
import Fondo from './Elements/Fondo';


// Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900
WebFont.load({
  google: {
    families: ['Poppins:200,400,700,900', 'Open Sans']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Helmet>
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      <title>APP GESTION GASTOS</title>
    </Helmet>
    <React.StrictMode>
      <BrowserRouter>
        <Contenedor>
          <Routes>
            <Route path='/Iniciar-sesion' element={<IniciarSesion/>}/>
            <Route path='/Crear-cuenta' element={<RegistroDeUsuarios/>}/>
            <Route path='/Categoria' element={<GastosPorCategoria/>}/>
            <Route path='/Lista-de-gastos' element={<ListaDeGastos/>}/>
            <Route path='/Editar-gasto/:id' element={<EditarGastos/>}/>
            <Route path='/' element={<App/>}/>
          </Routes>
        </Contenedor>
      </BrowserRouter>
      <Fondo/>
    </React.StrictMode>
  </>
);


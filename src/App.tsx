import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import {Provider} from 'react-redux';
import store from './store/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';


function App() {
    return (
        <Provider store={store}>
            <ToastContainer />
            <Router>
            <Navbar />
            <div style={{ minHeight: '100vh' }}>
                    <Routes>
                        <Route path="/" element={<Login />} />

                        <Route path="/login" element={<Login />} />

                        <Route path="/cadastrousuario" element={<CadastroUsuario />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/temas" element={<ListaTema />} />
                        <Route path="/posts" element={<ListaPostagem />} />

                        <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
                        <Route path="/formularioPostagem" element={<CadastroPost />} />
                        <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

                        <Route path="/deletarTema/:id" element={<DeletarTema />} />
                        <Route path="/formularioTema" element={<CadastroTema />} />
                        <Route path="/formularioTema/:id" element={<CadastroTema />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </Provider >
    );
}

export default App;
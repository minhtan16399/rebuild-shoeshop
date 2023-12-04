import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/sass/style.scss';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate';
import UserTemplate from './templates/UserTemplate';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Carousel from './components/Carousel';
import Modal from './util/Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='' element={<HomeTemplate />}>
                <Route path='register' element={<Register />}></Route>
                <Route path='' element={<Home/>}>
                    <Route index element={<Carousel/>}></Route>
                    <Route path='detail' element={<Modal/>}></Route>
                </Route>
            </Route>
            <Route path='user' element={<UserTemplate />}>
            </Route>
            <Route path='admin' element>
            </Route>
        </Routes>
    </BrowserRouter>
);

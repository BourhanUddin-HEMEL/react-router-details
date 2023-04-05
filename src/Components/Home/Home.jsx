import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './home.css';

const Home = () => {
    return (
        <div className='home-page'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
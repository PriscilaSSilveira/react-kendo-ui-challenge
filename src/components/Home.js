import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Link to="/feed">
                <button>Informações dos Filmes</button>
            </Link>
            <Carousel />
        </div>
    );
};

export default Home;

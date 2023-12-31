import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import BannerImage from '../assets/pizza.jpeg';

function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='headerContainer' >
                <h1>Pascal Pizzeria</h1>
                <p>Only the best for the taste</p>
                <Link to='/menu'>
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
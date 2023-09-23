import React from 'react'
import MultiplePizza from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizza})` }}></div>
            <div className='aboutBottom'>
                <h1>About us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore blanditiis asperiores modi ipsum, rerum quaerat, amet vero ab, fuga sunt itaque dolorem! Alias fugiat deleniti, aperiam voluptatum nam rerum explicabo aspernatur nisi, harum doloribus cumque at libero vel? Veritatis, omnis.</p>
            </div>
        </div>
    )
}

export default About
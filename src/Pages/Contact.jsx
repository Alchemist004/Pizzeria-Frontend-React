import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css'

function Contact() {
    return (
        <div className='contact'>
            <div className='leftSide' style={{ backgroundImage: `url(${PizzaLeft})` }}>
            </div>
            <div className='rightSide'>
                <h1>Contact Us</h1>
                <form id='contact-form' method='post'>
                    <label htmlFor="name">Full Name</label>
                    <input name='name' placeholder='Enter full name' type='text' />
                    <label htmlFor="email">Enter your Email</label>
                    <input name='email' placeholder='Enter your Email' type='text' />
                    <textarea rows='6' placeholder='enter a message for us'></textarea>
                    <button type='submit'>Send message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
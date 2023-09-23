import React, { useState } from 'react'
import Logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import { Reorder } from '@mui/icons-material';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)
    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }
    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <img src={Logo} alt="" />
                <div className='hiddenLinks'>
                    <Link to='/'>Home</Link>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
                <div className='rightSide'>
                    <Link to='/'>Home</Link>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <button onClick={toggleNavbar}><Reorder /></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
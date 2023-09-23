import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'


function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <InstagramIcon /><TwitterIcon /><LinkedInIcon />
            </div>

            <p>&copy; 2023 pascalpizza.com</p>
        </div>
    )
}

export default Footer
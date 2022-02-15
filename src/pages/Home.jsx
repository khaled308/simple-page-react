import React from 'react'
import bg from '../assets/bg.jpg'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
function HomePage() {
    return (
        <div className="home" style={{backgroundImage: `url(${bg})`}}>
            <div className="txt">
                <h2>Food Corner</h2>
                <p>Food is life</p>
            </div>
            <Link to='/'>
                <Button variant="contained">Order Now</Button>
            </Link>
        </div>
    )
}

export default HomePage
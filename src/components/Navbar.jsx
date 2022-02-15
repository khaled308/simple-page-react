import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
function Navbar() {
    const [appear, setAppear] = useState(false)
    return (
        <nav>
            <div className="container">
                <div className="left">
                    <h1>LOGO</h1>
                </div>
                <div className="right">
                    <ul className='links'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                    <div className="icon" onClick={()=>setAppear(!appear)}>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    </div>
                </div>
            </div>
            <div className={`hidden-links ${appear && 'appear'}`}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Menu</Link></li>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
import React,{useState} from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Link} from 'react-router-dom';
import '../css/navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
function Navbar() {
    const [openLinks,setopenLinks]=useState(false);
    const toggleNavBar=()=>{
        setopenLinks(!openLinks);
    };
    
    
    
    
    
    
      
      return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? 'open':'close'}>
                <h1>LOGO</h1>
                <div className='hiddenLinks'>
                    <Link to="/">Home</Link>
                    <Link to="/">About Us</Link>
                    <Link to="/">Our Services</Link>
                    <Link to="/contact">Case Studies & Projects</Link>
                    <Link to="/">Client Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                    <SearchOutlinedIcon/>
                </div>
            </div>
            <div className='rightSide'>
                    <Link to="/">Home</Link>
                    <Link to="/">About Us</Link>
                    <Link to="/">Our Services</Link>
                    <Link to="/contact">Case Studies & Projects</Link>
                    <Link to="/">Client Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                    <SearchOutlinedIcon style={{ color: 'white' }}/>
                 <button onClick={toggleNavBar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>  )
}

export default Navbar
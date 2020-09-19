import React from 'react';
import './Header.css';
import logo from './assets/logo.png';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className='header'>

            <nav className='header_nav'>
                <div className='header_search'>
                    <Link><SearchIcon className='header_serchIcon'></SearchIcon></Link>
                </div>

                <div className='header_login'>
                    <Link className='header_link' to='/login'>login</Link>
                </div>

                <div className='header_message'>
                    <Link className='header_link' to='/message'>message</Link>
                </div>

                <div className='header_favourite'>
                    <Link className='header_link' to='/favourite'>favourite</Link>
                </div>

                <div className='header_cart'>
                    <Link className='header_link' to='/cart'>cart</Link>
                </div>

            </nav>
            
            
        </div>
    )
}

export default Header

import React, {useState} from 'react';
import {MenuItems} from "../menuItems/menuItems";
import './styles.scss';

const Navbar = () => {
    const [navMenu, setNavMenu] = useState(false);

    const handleClick = () => {
        setNavMenu(!navMenu);
    }

    return (

        <div className='Navbar'>
            <nav className='NavbarItems'>
                <div className='navbar-logo'><h1>IED</h1></div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={navMenu ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}/>
                </div>
                <ul className={navMenu ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={{index}}><a className={item.cName} href={item.url}>{item.title}</a></li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
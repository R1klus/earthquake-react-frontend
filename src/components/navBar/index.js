import React, {useContext, useState} from 'react';
import {MenuItems} from "../menuItems/menuItems";
import './styles.scss';
import ReactSwitch from "react-switch"
import {themeContext} from "../../App";
import FrequencyInput from "../frequencyInput";

const Navbar = () => {
    const [navMenu, setNavMenu] = useState(false);
    const theme = useContext(themeContext);

    const handleClick = () => {
        setNavMenu(!navMenu);
    }

    return (
        <div className='navbar'>
            <nav className='navbar-items'>
                <div className='navbar-logo'><h1>IED</h1></div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={navMenu ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}/>
                </div>
                <ul className={navMenu ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <FrequencyInput/>
                    </li>
                    <li>
                        <div className="switch">
                            <div>Darkmode</div>
                            <ReactSwitch height={16} width={28} onChange={theme.toggleTheme}
                                         checked={theme.currentTheme === "dark"}/>
                        </div>
                    </li>

                    {MenuItems.map((item) => {
                        return (
                            <li key={item.title}><a className={item.cName} href={item.url}>{item.title}</a></li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
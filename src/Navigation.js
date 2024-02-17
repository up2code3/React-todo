import React from 'react';
import style from './components/mainStyle.module.css'

function Navigation() {
    return (
        <nav className={style.nav}>
            <ul>
                
                <li><a href="/" className={style.navLink}>Home</a></li>
                <li> <a target="_blank" rel="noreferrer" href="https://shorturl.at/aBY46" className={style.navLink}>airtable</a> </li>
                <li> <a href="/contact" className={style.navLink}>contact</a> </li>
            </ul>
        </nav>
    );
}

export default Navigation;
import React from 'react';
import style from './mainStyle.module.css'

function Navigation() {
    return (
        <nav className={style.nav}>
            <ul>
                <li> <a href="https://shorturl.at/aBY46" className={style.navLink}>airtable</a> </li>
                <li> <a href="/about" className={style.navLink}>about</a> </li>
            </ul>
        </nav>
    );
}

export default Navigation;
import classes from './NavigationItem.module.css';

import React from 'react';
import { NavLink } from 'react-router-dom'

function NavigationItem({ children, link }) {
    return (
        <li className={classes.NavigationItem}>
            <NavLink 
                to={link}
                exact 
                activeClassName={classes.active}
            >
                {children}
            </NavLink>
        </li>
    );
}

export default NavigationItem;
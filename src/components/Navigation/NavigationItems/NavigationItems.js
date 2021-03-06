import classes from './NavigationItems.module.css';

import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

function NavigationItems() {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/">Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
        </ul>
    );
}

export default NavigationItems;
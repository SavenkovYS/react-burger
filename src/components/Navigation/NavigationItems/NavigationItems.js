import classes from './NavigationItems.module.css';

import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

function NavigationItems() {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    );
}

export default NavigationItems;
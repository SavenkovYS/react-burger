import classes from './CheckoutSummary.module.css';

import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

function CheckoutSummary({ ingredients, checkoutCancelled, checkoutContinued }) {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tasts well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={ingredients} />
            </div>
            <Button btnType="Danger" clicked={checkoutCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={checkoutContinued}>Continue</Button>
        </div>
    );
}

export default CheckoutSummary;
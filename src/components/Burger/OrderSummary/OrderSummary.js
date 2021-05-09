import React from 'react';

import Button from '../../UI/Button/Button';

function OrderSummary({ ingredients, orderCancelled, orderContinued, price }) {
    const ingredientSummary = Object.keys(ingredients)
        .map (igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {ingredients[igKey]}
            </li>
            );
        })
    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={orderCancelled} btnType="Danger">Cancel</Button>
            <Button clicked={orderContinued} btnType="Success">Continue</Button>
        </>
    );
}

export default OrderSummary;
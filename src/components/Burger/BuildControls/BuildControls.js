import classes from './BuildControls.module.css';

import React from 'react';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

function BuildControls({ ingredientAdded, ingredientRemoved, disabled, price, purchasable, ordered }) {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{price.toFixed(2)}</strong></p>
            {controls.map(control => {
                return <BuildControl 
                    key={control.label} 
                    label={control.label}
                    added={() => ingredientAdded(control.type)}
                    removed={() => ingredientRemoved(control.type)}
                    disabled={disabled[control.type]}
                />
            })}
            <button className={classes.OrderButton} disabled={!purchasable} onClick={ordered}>Order now</button>
        </div>
    )
}

export default BuildControls;
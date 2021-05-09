import classes from './Burger.module.css';

import React from 'react';

import BurgerIndredient from './BurgerIngredient/BurgerIngredient';

function Burger({ ingredients }) {
    let transformedIngredients = Object.keys(ingredients)
        .map(igKey => {
            return [...Array(ingredients[igKey])].map((_, i) => {
                return <BurgerIndredient key={igKey + i} type={igKey} />
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (!transformedIngredients.length) {
        transformedIngredients = <p>Please, start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIndredient type="bread-top" />
            {transformedIngredients}
            <BurgerIndredient type="bread-bottom" />
        </div>
    );
}

export default Burger;
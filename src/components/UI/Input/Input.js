import classes from './Input.module.css';

import React from 'react';

function Input({ label, elementType, elementConfig, value, changed, invalid, shouldValidate, touched }) {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (invalid && shouldValidate && touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (elementType) {
        case ('input'):
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...elementConfig} 
                value={value}
                onChange={changed}
            />;
            break;
        case ('textarea'):
            inputElement = <textarea 
                className={inputClasses.join(' ')} 
                {...elementConfig}
                value={value}
                onChange={changed}
            />;
            break;
        case ('select'):
            inputElement = (
                <select 
                    className={inputClasses.join(' ')} 
                    value={value}
                    onChange={changed}>
                    {elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...elementConfig} 
                value={value}
                onChange={changed}
            />;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{label}</label>
            {inputElement}
        </div>
    );
}

export default Input;
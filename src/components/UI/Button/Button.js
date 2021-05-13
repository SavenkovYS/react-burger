import classes from './Button.module.css';

import React from 'react';

function Button({ children, clicked, btnType, disabled }) {
    return (
        <button disabled={disabled} className={[classes.Button, classes[btnType]].join(' ')} onClick={clicked}>{children}</button>
    );
}

export default Button;
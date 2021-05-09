import classes from './Button.module.css';

import React from 'react';

function Button({ children, clicked, btnType }) {
    return (
        <button className={[classes.Button, classes[btnType]].join(' ')} onClick={clicked}>{children}</button>
    );
}

export default Button;
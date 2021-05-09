import classes from './Backdrop.module.css';

import React from 'react';

function Backdrop({ show, clicked }) {
    return (
        show ? <div className={classes.Backdrop} onClick={clicked}></div> : null
    );
}

export default Backdrop;
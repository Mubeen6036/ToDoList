import React from 'react';
import classes from './ConfirmationModule.module.css';
const ConfirmationModule = props =>{
    return(
        <div className={classes.ConfirmationModule}>
                <div className={classes.Content}>{props.children}</div>
                <div className={classes.Buttons}>
                    <button className={classes.Approve} onClick={props.approve}>Approve</button>
                    <button className={classes.Cancel} onClick={props.cancel}>Cancel</button>
                </div>
        </div>
    )
}
export default ConfirmationModule;
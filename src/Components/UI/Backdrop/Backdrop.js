import React from 'react';
import classes from './Backdrop.module.css'
const backDrop = props =>{
    const backdrop = props.show?<div className={classes.Backdrop} onClick={props.click}/>:null;
    return backdrop;
}
export default backDrop;
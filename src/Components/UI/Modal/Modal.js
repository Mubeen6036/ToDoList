import React from 'react';
import classes from './Modal.module.css';
const modal = props =>{
    const style = props.show?[classes.Open, classes.Modal]:[classes.Close, classes.Modal];
    return <div className={style.join(' ')}>{props.children}</div>;
}
export default modal;
import React from 'react';
import auxiliary from '../../../hoc/Auxiliary';
import classes from './ToDoElement.module.css';
const toDoElement = props =>{

    return(
        <div className={classes.ToDoElement}>
            <div className={classes.Content}>
                {props.children}
            </div>
            <div className={classes.ButtonWrapper}>
                <button onClick={props.edit}>Edit</button>
                <button onClick={props.remove}>Delete</button>
            </div>
        </div>

    )
}
export default toDoElement;
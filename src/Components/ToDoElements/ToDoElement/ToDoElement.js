import React from 'react';
import classes from './ToDoElement.module.css';
import editImg from '../../../assets/edit.png';
import deleteImg from '../../../assets/delete.png';
const toDoElement = props =>{

    return(
        <div className={classes.ToDoElement}>
            <div className={classes.Content}>
                {props.children}
            </div>
            <div className={classes.ButtonWrapper}>
                <img onClick={props.edit} src={editImg} alt={'Edit'}/>
                <img onClick={props.remove} src={deleteImg} alt={'Delete'}/>
            </div>
        </div>

    )
}
export default toDoElement;
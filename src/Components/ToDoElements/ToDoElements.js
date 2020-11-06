import React from 'react';
import ToDoElement from './ToDoElement/ToDoElement';
import classes from './ToDoElements.module.css';
const toDoElements = props =>{
    let toDoElements = null;
    if(props.list){
        toDoElements = props.list.map((el, index) =>{
                return (
                <ToDoElement key={index} remove={()=>{return props.delete(index)}}
                                edit ={()=>{return props.edit(index)}}>
                                    {el}
                </ToDoElement>);
            }
        )
    }
    return <div className={classes.ToDoElements}>{toDoElements}</div>;
}
export default toDoElements;
import React from 'react';
import ToDoElement from './ToDoElement/ToDoElement'
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
    return toDoElements;
}
export default toDoElements;
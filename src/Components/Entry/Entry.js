import React, {useRef} from 'react';
import classes from './Entry.module.css';
const Entry = props => {
    let inputVariable = useRef();
    if(inputVariable.current){
        inputVariable.current.value = '';
    }
    if(props.editableContent){
        inputVariable.current.value = props.editableContent;
    }
    let button = null;
    if(props.editMode){
        button = <button onClick={()=>{props.update(inputVariable.current.value)}}>Update</button>;
    }else{
        button = <button onClick={()=>{props.add(inputVariable.current.value)}}>Add</button>;
    }
     
    return(
        <div className={classes.Entry}>
            <input ref={inputVariable}/>
            {button}
        </div>
    );
}
export default Entry;
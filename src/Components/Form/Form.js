import React, {useRef} from 'react';
import classes from './Form.module.css';
const Form = props => {
    let inputVariable = useRef();
    if(inputVariable.current){
        inputVariable.current.value = '';
    }
    return(
        <div className={classes.Entry}>
            <input ref={inputVariable}/>
            <button onClick={()=>{props.add(inputVariable.current.value)}}>Add</button>
        </div>
    );
}
export default Form;
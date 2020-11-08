import React, {useRef} from 'react';
import classes from './Form.module.css';
const Form = props => {
    let inputVariable = useRef();
    if(inputVariable.current){
        inputVariable.current.value = '';
    }
    return(
        <div className={classes.Entry}>
            <form className={classes.Form}>
                <input ref={inputVariable}/>
                <button onClick={(event)=>{event.preventDefault();props.add(inputVariable.current.value)}}>Add</button>
            </form>
        </div>
    );
}
export default Form;
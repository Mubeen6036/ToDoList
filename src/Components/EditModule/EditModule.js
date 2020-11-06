import classes from './EditModule.module.css';
import React,{Component, useRef} from 'react';
class EditModule extends Component {
    constructor(props){
        super(props);
        this.inputReference = React.createRef();
    }
    
    componentDidUpdate(){
        if(this.props.editableContent){
            this.inputReference.current.value = this.props.editableContent;
        }
    }
    render(){
        return( 
            <div className={classes.EditModule}>
                <input ref={this.inputReference}/>
                <button onClick={()=>this.props.update(this.inputReference.current.value)}>Update</button>
            </div>
        );
    }
}
export default EditModule;
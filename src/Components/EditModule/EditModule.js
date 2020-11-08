import classes from './EditModule.module.css';
import React,{PureComponent} from 'react';
class EditModule extends PureComponent {
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
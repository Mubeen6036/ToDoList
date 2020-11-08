import React, { PureComponent} from 'react';
import classes from './Modal.module.css';
class Modal extends PureComponent{
    divWidth = 0;
    cssStyle={};
    divReference = React.createRef();

    componentDidUpdate(){
        this.divWidth = this.divReference.current.offsetWidth;
        this.cssStyle = window.innerWidth > 500?{left : `calc(50% - ${this.divWidth/2}px)`}:null;
    }
    
    
    render(){
    const style = this.props.show?[classes.Open, classes.Modal]:[classes.Close, classes.Modal];
    return (<div ref={this.divReference} className={style.join(' ')} 
                style={this.cssStyle}>
                {this.props.children}
            </div>);
    }
}
export default Modal;
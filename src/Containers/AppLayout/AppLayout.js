import React,{Component} from 'react';
import EditModule from '../../Components/EditModule/EditModule';
import Form from '../../Components/Form/Form';
import ToDoElements from '../../Components/ToDoElements/ToDoElements';
import BackDrop from '../../Components/UI/Backdrop/Backdrop';
import Modal from '../../Components/UI/Modal/Modal';
import classes from './AppLayout.module.css';

class AppLayout extends Component{
    state = {
        toDoList : [],
        editMode : false,
        editableItem : null,
        editableContent : null
    }
    addToListHandler = (content) =>{
        if(content){
            let newList = this.state.toDoList;
            newList.push(content);
            this.setState({toDoList : newList});
        }   
    }
    deleteFromListHandler = (index) =>{
        let existingList = this.state.toDoList;
        existingList.splice(index, 1);
        this.setState({toDoList : existingList});
    }
    editHandler = (editIndex)=>{

        const editableContent = this.state.toDoList.filter((el,index)=>{
            return index===editIndex;
        })
        this.setState({editMode : true, 
                        editableItem : editIndex, 
                        editableContent : editableContent});
    }
    updateHandler = (content) =>{
        let existingList = this.state.toDoList;
        existingList.splice(this.state.editableItem, 1, content);
        this.setState({editMode : false,
                        editableItem : null, 
                        editableContent : null,
                        toDoList : existingList});
    }
    toggleEditModeHandler = () =>{
        this.setState(
            {editMode : false,
            editableItem : null, 
            editableContent : null})
    }

    render(){
        return(
            <main>
                <div className = {classes.AppLayout}>
                    <BackDrop show={this.state.editMode} hide={this.toggleEditModeHandler}/>
                    <Modal show={this.state.editMode} >
                        <EditModule update = {this.updateHandler}
                                    editableContent={this.state.editableContent}/>
                    </Modal>
                    <Form add = {this.addToListHandler} 
                            editMode={this.state.editMode}
                            editableItem={this.state.editableItem}
                            editableContent={this.state.editableContent}
                            update = {this.updateHandler}/>
                    <ToDoElements list = {this.state.toDoList}
                                    delete = {this.deleteFromListHandler}
                                    edit = {this.editHandler}/>
                </div>
            </main>
        );
    }
}
export default AppLayout;
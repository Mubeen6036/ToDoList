import React,{Component} from 'react';
import EditModule from '../../Components/EditModule/EditModule';
import Form from '../../Components/Form/Form';
import ToDoElements from '../../Components/ToDoElements/ToDoElements';
import Backdrop from '../../Components/UI/Backdrop/Backdrop';
import ConfirmationModule from '../../Components/UI/ConfirmationModule/ConfirmationModule';
import Modal from '../../Components/UI/Modal/Modal';
import classes from './AppLayout.module.css';
import Auxiliary from '../../hoc/Auxiliary';

class AppLayout extends Component{
    state = {
        toDoList : [],
        editMode : false,
        editableItem : null,
        editableContent : null,
        deleteMode : false,
        deletableItem : null
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
        this.setState({toDoList : existingList, deleteMode:false, deletableItem:null});
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
    toggleDeleteModeHandler=()=>{
        this.setState({deleteMode : false, deletableItem : null});
    }
    deleteHandler = (index) =>{
        this.setState({deleteMode : true, deletableItem : index});
    }

    render(){
       
        return(
            <main>
                <div className = {classes.AppLayout}>
                    <Backdrop show={this.state.editMode} click={this.toggleEditModeHandler}/>
                    <Modal show={this.state.editMode} >
                        <EditModule update = {this.updateHandler}
                                    editableContent={this.state.editableContent}/>
                    </Modal>

                    <Auxiliary>
                        <Backdrop show={this.state.deleteMode} 
                                    click={this.toggleDeleteModeHandler}/>
                        <Modal show={this.state.deleteMode}>
                            <ConfirmationModule 
                                    cancel = {this.toggleDeleteModeHandler}
                                    approve = {()=>{return this.deleteFromListHandler(this.state.deletableItem)}}>
                                Do you wanna delete this item?
                            </ConfirmationModule>
                        </Modal>
                    </Auxiliary>

                    <Form add = {this.addToListHandler} 
                            editMode={this.state.editMode}
                            editableItem={this.state.editableItem}
                            editableContent={this.state.editableContent}
                            update = {this.updateHandler}/>
                    <ToDoElements list = {this.state.toDoList}
                                    delete = {this.deleteHandler}
                                    edit = {this.editHandler}/>
                </div>
            </main>
        );
    }
}
export default AppLayout;
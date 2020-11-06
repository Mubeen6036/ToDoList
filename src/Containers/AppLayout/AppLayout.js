import React,{Component} from 'react';
import Entry from '../../Components/Entry/Entry';
import ToDoElements from '../../Components/ToDoElements/ToDoElements';
import Auxiliary from '../../hoc/Auxiliary';
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
        this.setState({editMode : true, editableItem : editIndex, editableContent : editableContent});
    }
    updateHandler = (content) =>{
        let existingList = this.state.toDoList;
        existingList.splice(this.state.editableItem, 1, content);
        this.setState({editMode : false,
                        editableItem : null, 
                        editableContent : null,
                        toDoList : existingList});
    }

    render(){
        return(
            <main>
                <div className = {classes.AppLayout}>
                    <Entry add = {this.addToListHandler} 
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
import React, { Component } from 'react';
import { MainWrapper } from './style';

class AddNewListForm extends Component {

        constructor(props){
                super(props);
            }
        render(){
                return (
                        <MainWrapper.inputFields>
                                <input type="text" placeholder="Add item..." value={this.props.newItemText} onChange={this.props.inputHandler} />
                                <button type="button" onClick={this.props.addIem}>Add</button>
                        </MainWrapper.inputFields>
                )
        }
}



export default AddNewListForm;
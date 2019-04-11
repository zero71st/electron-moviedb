import React, { Component } from 'react';
import TextBox from '../controls/TextBox';
import Dropdown from '../controls/Dropdown';
import CheckBoxList from '../controls/CheckBoxList';
import TextArea from '../controls/TextArea';
import Button from '../controls/Button';

export default class FormValidation extends Component{
    constructor(props){
        super(props)

        this.state={
            newUser:{
                firstname:null,
                age:null,
                gender:null,
                skills:[],
                about:null
            },
            genders:["Male","Female","Orther"],
            optionSkills:["Programmer","Development","Testing","Design","UX-UI"]
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.newUser);
    }

    handleChange=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        this.setState(prevState => ({
               newUser:{
                   ...prevState.newUser,
                   [name]:value
               }
        }));
    }

    handleCheckbox=(e)=>{
        
        const newSelection = e.target.value;
        let newSelectionArray;
        
        if (this.state.newUser.skills.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.newUser.skills.filter(skill => skill !== newSelection);
        } else {
            newSelectionArray = [...this.state.newUser.skills, newSelection];
        }

        this.setState(prevState => ({newUser: { ...prevState.newUser, skills: newSelectionArray }}));
    }

    handleTextArea=(e)=> {
        let value = e.target.value;

        this.setState(prevState => ({newUser:{...prevState.newUser,about:value}}));
    }

    handleClear=(e)=>{
        this.setState({
            newUser:{
                firstname:'',
                age:'',
                skills:[],
                gender:'',
                about:''
            }
        })
    }

    render(){
        return(
            <div class="container">
                <h3>Sample Form Container</h3>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <TextBox
                                name={"firstname"}
                                title={"Full Name"}
                                value={this.state.newUser.firstname}
                                onTextChange={this.handleChange}
                                placeholder={"Enter your name"}
                            />

                            <TextBox
                                name={"age"}
                                title={"Age"}
                                value={this.state.newUser.age}
                                onTextChange={this.handleChange}
                                placeholder = {"Enter your age"}
                            />

                            <Dropdown
                                name={"gender"}
                                title={"Gender"}
                                Items={this.state.genders}
                                onSelectedIndexChange={this.handleChange}
                                placeholder={"Select Gender"}
                            />

                            <CheckBoxList
                                name={"skills"}
                                Items={this.state.optionSkills}
                                SelectedItems={this.state.newUser.skills}
                                onItemChecked={this.handleCheckbox}
                            />

                            <TextArea
                                name={"about"}
                                value={this.state.newUser.about}
                                title={"About you"}
                                cols={"3"}
                                rows={"4"}
                                onTextChange={this.handleTextArea}
                            />

                            <Button
                                type={"submit"}
                                buttonType={"primary"}
                                caption="Submit"
                            />

                            <Button
                                type={"reset"}
                                buttonType={"secondary"}
                                caption="Clear"
                                onClick={this.handleClear}
                                style={{margin:"10px 10px 10px 10px"}}
                            />

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
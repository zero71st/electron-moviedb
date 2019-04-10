import React, { Component } from 'react';


export default class FormValidation extends Component{
    constructor(props){
        super(props)

        this.state={
            newUser:{
                firstname:'',
                age:'',
                gender:'',
                skills:[],
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
        // console.log(this.state.newUser.skill);
        alert(e.target.value);
        const newSelection = e.target.value;
        let newSelectionArray;

        newSelectionArray = [...this.state.newUser.skills,newSelection];

        this.setState(prevState => ({
            newUser: { ...prevState.newUser, skills: newSelectionArray }
          }));


    }

    render(){
        return(
            <div class="container">
                <h3>Sample Form Container</h3>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="fullname">Full Name</label>
                                <input type="text" name="firstname" onChange={this.handleChange} className="form-control" id="fullname" aria-describedby="fullnameHelp" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="age">Age</label>
                                <input type="text" name="age" onChange={this.handleChange} className="form-control" id="age" placeholder="Enter your age" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="gender">Gender</label>
                                <select id="gender" name="gender" value={this.state.newUser.gender} onChange={this.handleChange} className="form-control">
                                    <option selected>Select Gender</option>
                                    {this.state.genders.map(gender=> 
                                        <option key={gender} value={gender}>
                                            {gender}
                                        </option>
                                    )}
                                </select>
                            </div>

                            <div className="form-group">
                                {this.state.optionSkills.map(skill => {
                                    return (
                                        <div className="form-check form-check-inline">
                                            <input 
                                                id="skills"
                                                name="skills"
                                                value={skill}
                                                onChange={this.handleCheckbox} 
                                                //checked={this.state.newUser.skills.indexof(skill) > -1}
                                                checked={this.state.newUser.skills.indexOf(skill) > -1}
                                                className="form-check-input"
                                                type="checkbox" 
                                                />
                                            {/* <label className="form-check-label" htmlFor="gridCheck">
                                                {skill}
                                            </label> */}
                                        </div>
                                    )
                                }
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="about">About you</label>
                                <textarea className="form-control" id="about" rows="4"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
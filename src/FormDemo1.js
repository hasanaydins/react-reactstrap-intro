import React, {Component} from 'react';

export default class FormDemo1 extends Component {

    state={
        userName:"",
        city:""
    }

    onChangeHandler = (event) => {
       // this.setState({userName: event.target.value})

        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]: event.target.value})
    }

    onSubmitHandler = (event) => {
    event.preventDefault()
    alert(this.state.userName,this.state.city)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h3>Username</h3>
                    <input name="userName" onChange={this.onChangeHandler} type="text"/>
                    <h3>Username is {this.state.userName}</h3>

                    <h3>City</h3>
                    <input name="city" onChange={this.onChangeHandler} type="text"/>
                    <h3>Username is {this.state.city}</h3>


                    <input type="submit" value="Save"/>
                </form>
            </div>
        );
    }

}
import React, { Component } from 'react'

export default class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        password_confirm: '',
        admin: false
    }
    handleChange = event =>{
        this.setState({[event.target.name]: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label for='name'>Name</label>
                        <input type='text' name='name' id='name' onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label for='email' >Email</label>
                        <input type='email' name='email' id='email' onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label for='password'>Password</label>
                        <input type='password' name='password' id='password' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label for='password_confirm'>Password Confirmation</label>
                        <input type='password' name='password_confirm' id='password_confirm' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label for='admin'>Admin?</label>
                        <input type='checkbox' name='admin' id='admin' onChange={this.handleChange}/>
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

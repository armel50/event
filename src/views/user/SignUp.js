import React, { Component } from 'react'
import '../../assets/authentication.css'
import { connect } from 'react-redux';
import SignUpUser from '../../actions/SignUpUser'


 class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password_digest: '',
        password_confirm: '',
        admin: false
    }
    handleChange = event =>{
        this.setState({[event.target.name]: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault()
        this.props.SignUpUser(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' id='name' onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label htmlFor='email' >Email</label>
                        <input type='email' name='email' id='email' onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label htmlFor='password_digest'>Password</label>
                        <input type='password' name='password_digest' id='password_digest' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='password_confirm'>Password Confirmation</label>
                        <input type='password' name='password_confirm' id='password_confirm' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='admin'>Admin?</label>
                        <input type='checkbox' name='admin' id='admin' onChange={this.handleChange}/>
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>  ({
    SignUpUser: (user)=> dispatch(SignUpUser(user))
})
export default connect(null,mapDispatchToProps)(SignUp)
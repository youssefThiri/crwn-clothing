import React from "react";
import './sign-in.styles.scss' ;
import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";


// we gonna use the class component becaus we want to store what the users typing in 


class SignIn extends React.Component {
    constructor () {
        super () ;

        this.state = {
        email : '' ,
        password : '' ,  
        }
    } 

    handleSubmit = event => {
        event.preventDefault() ;
        this.setState({email: '' , password: ''})
    }

    handleChange = event => {
        const { value , name } = event.target ;

        this.setState ({[name] : value   })
    }

    render () {
        return (
            <div className="sign-in">
                <h2> I already have an account </h2>
                <span> sign in with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        handelChange = {this.handleChange}
                        label = 'email'
                        required
                    /> 
                    <FormInput
                        name="password"
                        type="password" 
                        value={this.state.password} 
                        handelChange = {this.handleChange}
                        label = 'password'
                        required  /> 
            
                        <div className= 'buttons' >
                            <CustomButton type="submit"> sign in </CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                            {' '} sign in with google  {' '}
                            </CustomButton> 
                        </div>                   
                </form>
            </div>
        );
    }
}
export default SignIn ;

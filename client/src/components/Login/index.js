import './index.scss';
import Loader from 'react-loaders';
import React, { useState } from 'react';
import { faUser,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutation } from '@apollo/client';
import {  NavLink, redirect} from 'react-router-dom';
import { LOGIN_USER } from '../../utils/mutation';
import Auth from '../../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
        const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
          const { data } = await login({
            variables: { ...formState },
          });
         
    
          Auth.login(data.login.token);
        } catch (e) {
          console.error(e);
         
        }
    
        // clear form values
        setFormState({
          email: '',
          password: '',
        });
      };
      const disabledButton = !formState.email || formState.password.length < 6
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    return ( <>
    <div className="login-box">
          <div className="login">
            <h2 className="loginh2">Login</h2>
            <p className="ptag">Don't have an account?<NavLink className="register" exact="true" to='/signup'>
        <u>Register</u>
        </NavLink></p>
           
           
           
            
            <form className="form-1">
               <FontAwesomeIcon className="icon-user" icon={faUser} size='5x'color="orange"/>
            
              <input className="username"  onChange={handleChange} required={true} placeholder="Email" name="email" value={formState.email} type='text'></input>
              
              <input className="password" onChange={handleChange}  required={true} value={formState.password} name="password" placeholder="Pasword"type='password' ></input>
              <button  disabled={disabledButton}  onClick={handleFormSubmit} className="loginbtn">Login</button>
              {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
            </form>
         
          </div>
    </div>
    <Loader type="ball-rotate" />
  </>
    )
}
export default Login
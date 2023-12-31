import { MdOutlineEmail } from "react-icons/md";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { MdPerson } from "react-icons/md";
import React, { useState, useContext } from 'react';
import PasswordContext from './passwordContext';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Register.css';

function Register() {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState({});
    const passwordContext = useContext(PasswordContext);
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
      };

      const handleLastnameChange = (e) => {
        setLastname(e.target.value);
      };

      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };

      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

      const handlePasswordConfirmationChange = (e) => {
        setPasswordConfirmation(e.target.value);
      };

      const validateForm = () => {
        const validationErrors = {};

        if (!name) {
          validationErrors.name = ['The Name field is required'];
        }

        if (!lastname) {
          validationErrors.lastname = ['The Last Name field is required'];
        }

        if (!email) {
          validationErrors.email = ['The Email field is required'];
        }

        if (!password) {
          validationErrors.password = ['The Password field is required'];
        } else if (password.length < 6) {
          validationErrors.password = ['The Password field must have at least 6 characters'];
        }

        if (password !== passwordConfirmation) {
          validationErrors.passwordConfirmation = ['Confirm Password field must match Password'];
        }

        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
          return;
        }
 
        axios
          .post('/register/client', {
            name,
            lastname,
            email,
            password,
            password_confirmation: passwordConfirmation,
          })
          .then((response) => {
            navigate('/cat');
          })
          .catch((error) => {
            if (error.response && error.response.data && error.response.data.errors) {
              setErrors(error.response.data.errors);
            }
          });
      };

    return (
        <div className="container">
            <div className="row">
                <div className="" style={{ marginTop: "", display:"flex" }} >
                        <div className="imm" style={{ marginTop: "7%" ,marginLeft:'%'}}>
                                <img src="./imgs/sideBg.png" alt="bg" class="d-block " id="" width={400} />
                        </div>

                    <div className="  main">
                    <form onSubmit={handleSubmit}>
                        <div className="sub-main shadow">
                            <div>
                            <h1 className='p'> Sign up</h1>

                                <div className="center">

                                    <div className='second-input'>
                                        <div className='person1'> <MdPerson /></div>
                                        <input type="text" placeholder="First name" name="name" value={name} className="name" onChange={handleNameChange} />
                                        {errors && errors.name && (
                                            <div className="error">{errors.name[0]}</div>
                                        )}
                                    </div>
                                    <div className='second-input'>
                                        <div className='person2'><MdPerson /></div>
                                        <input type="text" placeholder="Last name" className="name" value={lastname} onChange={handleLastnameChange} />
                                        {errors && errors.lastname && (
                                            <div className="error">{errors.lastname[0]}</div>
                                        )}
                                    </div>
                                    <div className='second-input'>
                                        <div className='email'><MdOutlineEmail /></div>
                                        <input type="text" placeholder="User email" className="name" name="email" value={email} onChange={handleEmailChange} />
                                        {errors && errors.email && (
                                            <div className="error">{errors.email[0]}</div>
                                        )}
                                    </div>
                                    <div className="second-input">
                                        <div className='pass'><AiFillLock /></div>
                                        <input type="password" placeholder="Your password" className="name" value={password} onChange={handlePasswordChange} />
                                        {errors && errors.password && (
                                            <div className="error">{errors.password[0]}</div>
                                        )}
                                    </div>
                                    <div className="second-input">
                                        <div className='pass'><AiFillUnlock /></div>
                                        <input type="password" placeholder="Confirm Password" name="password" className="name" value={passwordConfirmation} onChange={handlePasswordConfirmationChange} />
                                        {errors && errors.passwordConfirmation && (
                                            <div className="error">{errors.passwordConfirmation[0]}</div>
                                        )}
                                    </div>
                                    <div className="login-button">
                                        <input type="submit" value="Register" className="button" />
                                    </div>

                                    <p className="link">
                                        <Link to={'/login'} style={{ color: "orangered" }}>
                                        <div style={{color:'black'}}> Have an account? </div> Login Here
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="hr imm ">

                        <div className="d-flex icons" >
                        <img src="./imgs/instagram.png" alt="bg" class="d-block im" id="" width={50} />
                        <img src="./imgs/facebook.png" alt="bg" class="d-block im" id="" width={50} />
                        <img src="./imgs/twitter.png" alt="bg" class="d-block im" id="" width={50} />

                    </div>

                    </div>

                    </div>


                </div>


           </div>
        </div>
    );
}

export default Register;

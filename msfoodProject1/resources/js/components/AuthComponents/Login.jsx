import React, { useState } from 'react';
import axios from 'axios';
import { MdOutlineEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./loginUi.css";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login/client', {
                email,
                password
            });
            const userRole = response.data.role;
            console.log(userRole)
            if (userRole === 'admin') {
                window.location.href = '/admin/dashboard';
            } else {

                window.location.href = '/cat';
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {

                setError('Invalid email or password');
            } else if (error.response && error.response.data && error.response.data.errors) {

                const validationErrors = Object.values(error.response.data.errors).flat();
                setError(validationErrors[0]);
            } else {

                setError('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <div>
            <div className="">
                <div style={{ marginTop: "" }}></div>
                <div className="d-flex">
                    <div className='imm' style={{ marginTop: "60px" }}>
                        <img src="./imgs/fast-food.png" alt="bg" className="d-block" id="" />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form shadow" style={{ marginTop: "70px" }}>
                            <div className="">
                                <h1 className='d'> Log in</h1>
                                <div className="inputs">
                                    <div className="second-input2">
                                        <div className="email">
                                            <MdOutlineEmail />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            className="pl"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <br />
                                    <div>
                                        <div className="">
                                            <div className="pass">
                                                <AiFillLock />
                                            </div>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                placeholder="Your Password"
                                                className="pl"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            {error && <div className="error">{error}</div>}
                                        </div>
                                    </div>
                                    <br />
                                    <button type="submit" id="buttonlogin">
                                        Login
                                    </button>
                                </div>
                            </div>
                            <p style={{ marginLeft: "20%", marginTop: "10%" }}>
                                Don't have an account?{" "}
                                <Link to={"/register"} style={{ color: "orangered" }}>
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <div className="hr2 imm">
                <div className="d-flex icons2 ">
                    <img src="./imgs/instagram.png" alt="bg" className="d-block im2" id="" width={50} />
                    <img src="./imgs/facebook.png" alt="bg" className="d-block im" id="" width={50} />
                    <img src="./imgs/twitter.png" alt="bg" className="d-block im" id="" width={50} />
                </div>
            </div>
        </div>
    );
};

export default LoginForm;

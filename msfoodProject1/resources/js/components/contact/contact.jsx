import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const contact = {
            username: username,
            email: email,
            message: message
        };

        try {
            setLoading(true);
            await axios.post('/api/contact', contact);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your message has been sent',
                showConfirmButton: false,
                timer: 1500
            });
            setLoading(false);
            navigate('/create');
        } catch (error) {
            console.log('createerr',error);
        }
    };


    return (
        <div className="container shadow ">
            <h1 className='cont'>Contact Us</h1>
            <form onSubmit={handleSubmit} className="form-inline">
                <div className="row justify-content-center">
                    <div className="form-group col-6 mr-2 input-form ">
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            id="name"
                            placeholder="Enter your name"

                        />
                    </div>
                    <div className="form-group col-6 mr-2 input-container ">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            placeholder="Enter your email"

                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-container ">
                        <textarea
                        className='col-12'
                            name="message"
                            cols="100"
                            rows="10"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter your message"
                        ></textarea>
                    </div>
                </div>
                {loading ? (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <button type="submit">Contact</button>
                )}
            </form>
        </div>
    );
}

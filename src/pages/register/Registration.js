import React, { useState } from 'react';
import './Registration.scss';

const Registration = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a data object with the form values
        const formData = {
            name,
            username,
            password,
            email,
        };

        try {
            const response = await fetch('http://localhost:5000/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Registration successful, you can redirect to a success page or perform other actions
                console.log('Registration successful');
            } else {
                // Handle registration error
                console.error('Registration failed');
            }
        } catch (error) {
            // Handle network or other errors
            console.error('Error:', error);
        }
    };

    return (
        <div className='centered-registration-container'>
            <div className='container'>
                <div>
                    <div>
                        <h2 className='text'>Register</h2>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='user-register-info'>
                                <label htmlFor="name" className='text'>Full Name</label>
                                <input
                                    placeholder='Name: '
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='user-register-info'>
                                <label htmlFor="username" className='text'>Username</label>
                                <input
                                    placeholder='Username: '
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='user-register-info'>
                                <label htmlFor="password" className='text'>Password</label>
                                <input
                                    placeholder='Password: '
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='user-register-info'>
                                <label htmlFor="email" className='text'>Email</label>
                                <input
                                    placeholder='Email: '
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className='submit'>Register</button>
                            <p className='text'>Already have an account? <a href="/login" className='submit'>Sign in</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;

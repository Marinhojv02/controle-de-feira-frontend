import React, { useState } from 'react';
import { useUser } from '../../setup/UserContext';
import './Login.scss';

const Login = () => {
    const { login } = useUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            username,
            password,
        };

        try {
            const response = await fetch('http://localhost:5000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                login(data.user_info.user, data.user_info.token)
            } else {
                console.log('Login failed. Please check your username and password.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='centered-login-container'>
            <div className='container'>
                <div>
                    <div>
                        <h2 className='text'>Login</h2>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='user-login-info'>
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
                            <div className='user-login-info'>
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
                            <button type="submit" className='submit'>
                                Login
                            </button>
                        </form>
                        <p className='text'>
                            Don't have an account? <a href="/register" className='submit'>Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

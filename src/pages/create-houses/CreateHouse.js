import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { useUser } from '../../setup/UserContext';
import './CreateHouse.scss';

const CreateHouse = () => {
    const navigate = useNavigate(); // Initialize navigate
    const { user } = useUser();
    const [house_name, set_house_name] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a data object with the form values
        const formData = {
            house_name,
            house_residents: [{ user_id: user.user_id }],
        };

        try {
            const response = await fetch('http://localhost:5000/houses/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Success: Display a success message and redirect
                setMessage('House created successfully.');
                setError('');
                setTimeout(() => {
                    navigate('/houses/view-houses');
                }, 2000);
            } else {
                // Error: Display an error message
                const errorMessage = await response.text();
                setError(JSON.parse(errorMessage));
                setMessage('');
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
                        <h2 className='text'>Create House</h2>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='user-login-info'>
                                <label htmlFor='house_name' className='text'>
                                    House name
                                </label>
                                <input
                                    placeholder='House name: '
                                    type='text'
                                    id='house_name'
                                    value={house_name}
                                    onChange={(e) => set_house_name(e.target.value)}
                                    required
                                />
                            </div>
                            <button type='submit' className='submit'>
                                Submit
                            </button>
                        </form>
                        {message && <p className='success-message'>{message}</p>}
                        {error && <p className='error-message'>{error.message}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateHouse;

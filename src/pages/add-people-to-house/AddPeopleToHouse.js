import React, { useState } from 'react';
import { useParams } from 'react-router';
import './AddPeopleToHouse.scss';

const AddPeopleToHouse = () => {
    const { id } = useParams();
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState(''); // Message state to display the result

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            username,
            house_id: id
        };

        try {
            const response = await fetch('http://localhost:5000/houses/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                setMessage('Success: User added to the house.'); // Display success message
            } else {
                setMessage('Error: Unable to add user to the house.'); // Display error message
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error: Something went wrong.'); // Display a generic error message
        }
    };

    return (
        <div className='centered-login-container'>
            <div className='container'>
                <div>
                    <div>
                        <h2 className='text'>ADD PERSON TO THE HOUSE</h2>
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
                            <button type="submit" className='submit'>
                                Add User
                            </button>
                            {message && <div className="message">{message}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPeopleToHouse;

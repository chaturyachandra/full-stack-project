import React, { useContext, useState } from 'react';
import { Context } from './GlobeData';
import './Profile.css';

const ProfilePage = () => {
    const { userData, setUserData, LogOut } = useContext(Context);
    const [newPassword, setNewPassword] = useState('');

    const handlePasswordChange = async () => {
        if (newPassword.trim() === '') {
            alert('Password cannot be empty');
            return;
        }
        else{
            setNewPassword(userData.id,updatedUser);
            
        }
        const updatedUser = {
            ...userData,
            password: newPassword,
        };

        try {
            // await axios.put(`http://localhost:3001/UserData/${userData.id}`, updatedUser);
            setUserData(userData.id,updatedUser);
            localStorage.setItem('userData', JSON.stringify(updatedUser));
            alert('Password updated successfully');
        } catch (error) {
            console.error('Error updating password', error);
            alert('Failed to update password');
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <h1 className="profile-title">User Profile</h1>
                <p style={{textAlign:'center',paddingLeft:'40px'}}><strong>Username:</strong> {userData.username}</p>
                <p style={{textAlign:'center',paddingLeft:'40px'}}><strong>Email:</strong> {userData.email}</p>
                <div className="profile-edit">
                    <h2 style={{textAlign:'center',paddingLeft:'40px'}}>Edit Password</h2>
                    <input 
                        type="password" 
                        placeholder="New Password" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)} 
                    />
                    <button onClick={handlePasswordChange}>Save Password</button>
                </div>
                <button className="logout-button" onClick={LogOut}>Logout</button>
            </div>
        </div>
    );
};

export default ProfilePage;

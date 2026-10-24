import React, { useState } from 'react';

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Sheezah Jawaid',
    email: 'sheezah@example.com',
    phone: '03001234567'
  });

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="profile-card">
      <h2>User Profile</h2>
      {!isEditing ? (
        <div className="profile-view">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      ) : (
        <form onSubmit={handleSave} className="profile-edit-form">
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              value={profile.name} 
              onChange={(e) => setProfile({...profile, name: e.target.value})} 
            />
          </div>
          <div>
            <label>Phone:</label>
            <input 
              type="tel" 
              value={profile.phone} 
              onChange={(e) => setProfile({...profile, phone: e.target.value})} 
            />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      )}
    </div>
  );
};

export default ProfileCard;
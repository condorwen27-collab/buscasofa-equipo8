import React from 'react';

function Profile({ user }) {
  const displayName = user || localStorage.getItem('username') || 'Usuario';

  return (
    <div id="profile-page" style={{ padding: '2rem' }}>
      <h1>Perfil de usuario</h1>
      <p id="profile-username">Nombre de usuario: <strong>{displayName}</strong></p>
    </div>
  );
}

export default Profile;

import React from 'react';

const UserCell = ({ onSelectUser, selectedSectionId, user }) => {
  return (
    <div
      className={`chat-user-item ${
        selectedSectionId === user.index ? 'active' : ''
      }`}
      onClick={() => {
        onSelectUser(user);
      }}
    >
      <div className="chat-user-row row">
        <div className="chat-avatar col-xl-2 col-3">
          <div className="chat-avatar-mode">
            <img
              src={user.photoURL}
              className="rounded-circle size-40"
              alt="Abbott"
            />
            <span
              className={`chat-mode smallcal ${
                user.connected ? 'online' : 'offline'
              }`}
            />
          </div>
        </div>

        <div className="chat-contact-col col-xl-10 col-9">
          <div className="h4 name">{user.displayName}</div>
          <div className="chat-info-des">
            {user.mood.substring(0, 30) + '...'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCell;
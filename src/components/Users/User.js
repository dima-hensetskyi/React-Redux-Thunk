import React from 'react';

import { UserCard } from '../StyleComponents/StyledComponents';

import './userForm.css';

const User = ({ name, username, avatar, id }) => (
  <UserCard>
    <div className="author">
      <img className="user-photo" src={avatar} alt={`autor ${name}`}></img>
      <div className="info">
        <p>
          Name: <span className="name">{name}</span>
        </p>
        <p className="autor-information">
          Nickname:<span className="name">{` @${username}`}</span>
        </p>
      </div>
    </div>
  </UserCard>
);

export default User;

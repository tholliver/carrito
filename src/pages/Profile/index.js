import React from "react";
import PropTypes from "prop-types";
import "./profile.css";

const propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  avatar: PropTypes.string,
};

const Profile = ({ name, bio, avatar }) => {
  //responsive-textarea no-border no-select
  const component = (
    
      <div className="profile-wrapper">
        <figure className="figure">
          <img
            className="avatar rounded-circle p-4"
            src={avatar}
            alt="profile"
          />
          <figcaption align="center">
            {name && <strong className='strongy'>{name}</strong>}
            {bio && <p className="mastermind">{bio}</p>}
          </figcaption>
        </figure>
      </div>
        
     
    
  );
  return component;
};

Profile.propTypes = propTypes;

export default Profile;

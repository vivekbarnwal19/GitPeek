import React from "react";
import LocationIcon from '../assets/images/locationicon.jpg';
import TwitterIcon from '../assets/images/twitter.png';
import LinkIcon from '../assets/images/link.png';
import CompanyIcon from '../assets/images/CompanyIcon.png';

function MainSection({ data }) {
  const {
    avatar_url,
    name,
    login,
    html_url,
    created_at,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
    bio
  } = data;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const InfoItem = ({ icon, label, link }) => (
    <div className="account-data1">
      <img src={icon} height="30px" width="30px" alt="" />
      {link ? (
        <a href={link} className="link" target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ) : (
        <p>{label}</p>
      )}
    </div>
  );

  return (
    <div className="main-section">
      <div className="main-section-content">
        <img src={avatar_url} height="100px" width="100px" className="img" alt="User Avatar" />
        <div>
          <h2>{name || "No Name Provided"}</h2>
          <a href={html_url} className="username" target="_blank" rel="noopener noreferrer">
            @{login}
          </a>
        </div>
        <p>Joined on {formatDate(created_at)}</p>
      </div>

      <div className="para1">
        <p>{bio || "This profile has no bio"}</p>
      </div>

      <div className="profile-data">
        <div><p>Repos</p><p>{public_repos}</p></div>
        <div><p>Followers</p><p>{followers}</p></div>
        <div><p>Following</p><p>{following}</p></div>
      </div>

      <div className="account-content1">
        <InfoItem icon={LocationIcon} label={location || "Not Available"} />
        <InfoItem icon={TwitterIcon} label={twitter_username || "Not Available"} link={twitter_username ? `https://twitter.com/${twitter_username}` : null} />
        <InfoItem icon={LinkIcon} label={blog?.length ? blog : "Not Available"} link={blog?.length ? blog : null} />
        <InfoItem icon={CompanyIcon} label={company || "Not Available"} />
      </div>
    </div>
  );
}

export default MainSection;

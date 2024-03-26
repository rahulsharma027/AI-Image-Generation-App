import React from 'react';
import './about.css';

const teamMembers = [
  {
    name: 'Rahul',
    role: 'CEO',
    image: 'rahul.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Harsh',
    role: 'CTO',
    image: 'harsh.jpg',
    bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Nakul',
    role: 'CFO',
    image: 'nakul.jpg',
    bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];

const AboutUs = () => {
  return (
    <div className="about-us">
      {teamMembers.map(member => (
        <div className="team-member" key={member.name}>
          <img src={`/images/${member.image}`} alt={member.name} />
          <div className="details">
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;

// SkillBox.js
import React from 'react';
import PropTypes from 'prop-types';

const SkillBox = ({ skillName, percentage, imageSrc }) => {
  return (
    <div className="skill-box">
      <img src={imageSrc} alt={skillName} className="skill-image" />
      <div className="skill-details">
        <h5>{skillName}</h5>
      </div>
    </div>
  );
};

SkillBox.propTypes = {
  skillName: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default SkillBox;

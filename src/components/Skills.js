// Skills.js
import React from 'react';
import SkillBox from './SkillBox'; 
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg"
import meter5 from "../assets/img/meter5.svg"
import meter6 from "../assets/img/meter6.svg"
import meter7 from "../assets/img/meter7.svg"
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skills = [

    //Web Developement
    
    { name: "HTML 5", percentage: 95, image: meter1, category: "Web Development" },
    { name: "CSS 3", percentage: 85, image: meter5, category: "Web Development" },
    { name: "JavaScript", percentage: 70, image: meter7, category: "Web Development" },
    { name: "Bootstrap 5", percentage: 95, image: meter1, category: "Web Development" },
    { name: "React JS", percentage: 85, image: meter4, category: "Web Development" },
    { name: "PHP", percentage: 67, image: meter6, category: "Web Development"},
    { name: "MySQL", percentage: 70, image: meter7, category: "Web Development"},

    //Cybersecurity

    { name: "Proxy Chains", percentage: 75, image: meter3, category: "Cybersecurity" },
    { name: "Penetration Testing", percentage: 70, image: meter7, category: "Cybersecurity" },
    { name: "OSINT", percentage: 80, image: meter2, category: "Cybersecurity" },
    { name: "Nmap", percentage: 70, image: meter7, category: "Cybersecurity" },
    { name: "MetaSploit", percentage: 67, image: meter6, category: "Cybersecurity" },
    { name: "Kali Linux", percentage: 65, image: meter2, category: "Cybersecurity" },
    { name: "Arch Linux", percentage: 95, image: meter1, category: "Cybersecurity" },
    { name: "Python", percentage: 67, image: meter6, category: "Cybersecurity" },


    //Extra Skills

    { name: "GitHub", percentage: 95, image: meter1, category: "Extra Skills" },
    { name: "Google FireBase", percentage: 60, image: meter3, category: "Extra Skills" },
    { name: "Material UI", percentage: 67, image: meter3, category: "Extra Skills" },
    { name: "Next UI", percentage: 65, image: meter3, category: "Extra Skills" },
    { name: "Linux", percentage: 95, image: meter1, category: "Extra Skills" },
    { name: "Figma", percentage: 60, image: meter3, category: "Extra Skills" },
    { name: "Tailwind CSS", percentage: 70, image: meter7, category: "Extra Skills" },
    { name: "Adobe Photoshop", percentage: 67, image: meter6, category: "Extra Skills" },

  ];

  // Include all unique categories
  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  const categorizedSkills = categories.map(category => ({
    category,
    skills: skills.filter(skill => skill.category === category)
  }));

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>My Skills</h2>
              <p>Here are some of the following Skills I know and have expertise in each of it.</p>
              {categorizedSkills.map((categoryData, index) => (
                <div key={index} className="skill-category">
                  <h3>{categoryData.category}</h3>
                  <div className="skill-container">
                    {categoryData.skills.map((skill, index) => (
                      <SkillBox 
                        key={index} 
                        skillName={skill.name} 
                        percentage={skill.percentage} 
                        imageSrc={skill.image} 
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}

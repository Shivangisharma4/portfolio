import React, { useState } from "react";
import image from "../images/wallpaper.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "Hi, I'm Shivangi, a computer science sophomore. I'm passionate about technology, I like to read books about technology, philosophy, and historic novels. I also enjoy experimenting with new things.";

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my learning and building experience, I continually look for new and better ways to make tech accessible to all.";

const skills = {
  "frontend Developement": ["JavaScript", "React.js", "Tailwind CSS"],
  "backend Developement": ["Node.js", "Express"],
  "database Management": ["MySQL", "MongoDB"],
  "APIs Integration": ["REST APIs", "Postman"],
  versionControl: ["Git", "GitHub", "GitLab"],
};

const About = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (area) => {
    setOpenDropdown((prev) => (prev === area ? null : area));
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <img className="background" src={image} alt={imageAltText} />
        <div className="about-content">
          <h2>About Myself</h2>
          <p className="large">{description}</p>
          <hr />
          <div className="dropdown-container">
            {Object.keys(skills).map((area) => (
              <div key={area} className="dropdown">
                <button className="dropdown-button" onClick={() => toggleDropdown(area)}>
                  {area.charAt(0).toUpperCase() + area.slice(1)}
                </button>
                {openDropdown === area && (
                  <ul className="dropdown-list">
                    {skills[area].map((skill) => (
                      <li key={skill} className="dropdown-item">
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <hr />
          <p className="quote">{detailOrQuote}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "StarGazers",
    description: `This project is an astronomical-themed organisational tool designed to enhance productivity and time
management. It integrates features like pomodoro timer, to-do lists, and other efficient tools to help users plan, prioritise, and
track their tasks effectively.`,
    url: "https://github.com/Shivangisharma4/StarGazers",
  },
  {
    title: "Whach-A-Mole",
    description: `A dynamic web-based game application created by the DOM Manipulation in JavaScript. Including soothing
CSS and User Interaction.`,
    url: "https://github.com/Shivangisharma4/Whack-A-Mole",
  },
  {
    title: "PinVibe-Quiz",
    description: `A fun interative 20-Question Quiz for the user, answering that leads to fetching 5 images from the database
according to a specific developer vibe.`,
    url: "https://github.com/Shivangisharma4/pinvibe-Quiz",
  },
];
const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}></div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

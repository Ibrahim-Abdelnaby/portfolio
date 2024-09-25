// Import CSS file
import { useState } from "react";
import "./skills.css";
function Skills() {
  const [cards] = useState([
    {
      logo: "../../../public/images/photoshop.svg",
      title: "Photoshop",
      alt: "Photoshop logo",
    },
    {
      logo: "../../../public/images/illustrator.svg",
      title: "Illustrator",
      alt: "Illustrator logo",
    },
    {
      logo: "../../../public/images/xd.svg",
      title: "Adobe XD",
      alt: "Adobe XD Logo",
    },
    {
      logo: "../../../public/images/figma.svg",
      title: "Figma",
      alt: "Figma Logo",
    },
    {
      logo: "../../../public/images/html.svg",
      title: "HTML",
      alt: "HTML Logo",
    },
    { logo: "../../../public/images/css.svg", title: "CSS", alt: "CSS Logo" },
    {
      logo: "../../../public/images/javascript.svg",
      title: "JavaScript",
      alt: "JavaScript Logo",
    },
    {
      logo: "../../../public/images/react.svg",
      title: "React",
      alt: "React Logo",
    },
  ]);
  return (
    <>
      <section id="skills">
        <div className="box">
          <div className="skills-box">
            <h2 className="neue title">My Skills</h2>
            {/* Cards Container */}
            <div className="cards">
              {cards.map((card, index) => (
                <div className="card" key={index}>
                  <div className="logo">
                    <img src={card.logo} alt={card.alt} />
                  </div>
                  <h6>{card.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;

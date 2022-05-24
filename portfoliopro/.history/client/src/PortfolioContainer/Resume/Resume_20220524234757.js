import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "/" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 80 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "C#", ratingPercentage: 60 },
  ];

  const projectsDetails = [
    {
      title: "Worker Services Project ",
        duration: { fromDate: "2022" },
        description:
          "An online application for hiring workers experienced in several fields to solve your problems",
        subHeading:
          "Technologies Used:  HTML, CSS, Python , Django, BootStrap , Trello, GitHub, Jquery, AJAX.",
    },{
      title: "Masar Project ",
      duration: { fromDate: "2022"},
      description:
        "An online application for managing trips inside Palestine",
      subHeading:
        "Technologies Used:  HTML, CSS, Java, JavaScript, STS , Spring Security, BootStrap , Trello, GitHub, Jquery, Google Map API.",
    },
    {
      title: "SlickTech Project ",
      duration: { fromDate: "2020" },
      description:
        "Online ecommerce website for showcasing and selling products online showing their details adjusting their info etc.",
      subHeading:
        "Technologies Used:HTML, CSS, JavaScript, ReactJS, ExpressJS, MongoDB, Mongoose, Material UI, React-Bootstrap, Git , GitHub, Bcrypt, JSON,  Web Token, Socket.io, Axios",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      

      <ResumeHeading
        heading={"AXSOS Academy"}
        subHeading={"Coding Dojo Bootcamp"}
        fromDate={"01-2022"}
        toDate={"05-2022"}
      />

      <ResumeHeading
        heading={"Al-Najah National University"}
        subHeading={"Bachelor's degree In Mechanical Engineering"}
        fromDate={"2013"}
        toDate={"2018"}
      />

      <ResumeHeading
        heading={"High School "}
        subHeading={"Private Modern School"}
        fromDate={"2007"}
        toDate={"2012"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Mechanical Engineer"}
          subHeading={"United-Arab Motors, Palestine, NBS"}
          fromDate={"04-2020"}
          toDate={"11-2020"}
        />
        
        <div className="experience-description">
          <span className="resume-description-text">
          •	Tested vehicle components using VCDS,ODIS diagnostic software's.<br />
          •	Offered friendly and efficient service to customers, handled challenging situations with ease.<br />
          •	Supervised maintenance team to meet all expected results and managed over 50 customer calls per day.<br />

          </span>
          <br />
          <ResumeHeading
          heading={"Engineering Manager"}
          subHeading={"Islamic-Palestinian Company, Palestine, TKM"}
          fromDate={"03-2019"}
          toDate={"09-2019"}
        />
          <span className="resume-description-text">
          •	Evaluated project goals and objectives to fulfill required quality requirements and identify potential risks.<br />
          •	Coordinated engineering team for projects in commercial and industrial development, in addition to preventive maintenance.
{" "}
          </span>
          
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Reading"
        description="Apart from being a tech enthusiast and a code writer, i also love to read books simply because i believe in Reading."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through new pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in any game, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
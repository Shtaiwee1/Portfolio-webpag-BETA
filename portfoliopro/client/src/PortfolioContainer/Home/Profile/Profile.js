import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";
import ScrollService from '../../../utilities/ScrollService';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='https://www.facebook.com/mohammed.imair'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='https://www.instagram.com/mohammad_shtaiwee/'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://github.com/Shtaiwee1'>
                        <i className='fa fa-github-square'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/mohammad-omair-665076142/'>
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    </div>
                </div>
            </div>
            <div className='profile-details-name'>
                <span className="primary-text">
                    {" "}
                    Hello, I'm <span className='highlighted-text'>Mohammad Omair</span>
                </span>
            </div>
            <div className='profile-details-role'>
                <span className='primary-text'>
                    {" "}
                    <h1>
                        <Typical
                        loop={Infinity}
                        steps={["Enthusiastic Dev 🔥", 1000,
                                "Full-Stack Developer💻",1000,
                                "MERN Stack Dev😎", 1000,
                                "Cross Platform v🌐", 1000,
                                "Multiple Full-stack projects🔴",1000,
                                ]}/>
                    </h1>
                    <span className='profile-role-tagline' >
                        Talent of building applications with front and back end operations.
                    </span>
                </span>
            </div>
            <div className='profile-options'>
                <button className='btn primary-btn'
                 onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                    
                    Hire Me
                </button>
                <a href='full stack cv.pdf' download='full stack cv.pdf' >
                    <button className='btn highlighted-btn'>Get Resume</button>
                </a>
            </div>
        </div>
        <div className='profile-picture'>
            <div className='profile-picture-background'>

            </div>
        </div>
    </div>
  )
}

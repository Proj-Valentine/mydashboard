import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { FiMapPin } from 'react-icons/fi';

const Footer = () => (
  <div className="mt-24 dark:text-gray-200 text-gray-700">
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      © 2022 All rights reserved by Valentine Kwame Ampah
    </p>

    

    <div className="Footertwo" style={{ display: "flex", justifyContent:"space-between", width:"100%",textAlign:"center"}}>
        <div><p>CONTACT</p> &nbsp;<span><SocialIcon url="https://mail.google.com" /> &nbsp; vkampah28@gmail.com </span></div>
        <div><a href="#top" style={{textDecoration:"none"}}>Top of Page</a></div>
        <div><p> PROFILE & PROJECTS</p>
        <SocialIcon  label="my video channel" network= "linkedin" url="https://www.linkedin.com/in/valentine-ampah-b92a0198" target="_blank" />
        &nbsp;<span><a href="https://www.linkedin.com/in/valentine-ampah-b92a0198" target="_blank" style={{textDecoration:"none"}} className="mt-24 dark:text-gray-200 text-gray-700">LinkedIn</a></span>
            &nbsp;&nbsp;<SocialIcon network = "github" url="https://github.com/Proj-Valentine/Python_Projects" target="_blank" bgColor="white" fgColor="black" />
            &nbsp;<span><a href="https://github.com/Proj-Valentine/Python_Projects" target="_blank" style={{textDecoration:"none"}} className="mt-24 dark:text-gray-200 text-gray-700">PythonAutomation</a></span>
            &nbsp;&nbsp;<SocialIcon network = "github" url="https://github.com/Proj-Valentine/mydashboard" target="_blank" bgColor="white" fgColor="black" />
            &nbsp;<span><a href="https://github.com/Proj-Valentine/mydashboard" target="_blank" style={{textDecoration:"none"}} className="mt-24 dark:text-gray-200 text-gray-700">ReactDashboardApp</a></span>
        </div>
    </div>

  </div>
);

export default Footer



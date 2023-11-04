import React from 'react';
import { SocialIcon } from 'react-social-icons';


const Footer = () => (
  <div className="mt-24 dark:text-gray-200 text-gray-700 md:font-normal md:overflow-auto sm:font-normal">
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      © 2023 All rights reserved by Valentine Kwame Ampah
    </p>

    

    <div className=" flex justify-between" style={{ width:"100%",textAlign:"center"}}>
        <div className="flex-button place-items-start"><p>Contact Info:</p><br/><p style={{textDecoration:"none"}}> &nbsp; vkampah28@gmail.com </p></div>
        {/* <div className="flex flex-button place-items-center"><a href="#top" style={{textDecoration:"none"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Back to Top</a></div> */}
        <div className="flex flex-col justify-between">
          <p> Profile & Projects</p>
          <div className="flex flex-button md:font-normal sm:font-normal">
          <SocialIcon  label="my video channel" network= "linkedin" url="https://www.linkedin.com/in/valentine-ampah-b92a0198" target="_blank" style={{ height: 25, width: 25 }}/>
          &nbsp;<span><a href="https://www.linkedin.com/in/valentine-ampah-b92a0198" target="_blank"  rel="noreferrer" style={{textDecoration:"none"}} className="mt-24 dark:text-gray-200 text-gray-700">LinkedIn</a></span>
              &nbsp;&nbsp;<SocialIcon network = "github" url="https://github.com/Proj-Valentine/Python_Projects" rel="noreferrer" target="_blank" bgColor="white" fgColor="black" style={{ height: 25, width: 25 }} />
              &nbsp;<span><a href="https://github.com/Proj-Valentine/Python_Projects" target="_blank" rel="noreferrer" style={{textDecoration:"none"}} className="mt-24 dark:text-gray-200 text-gray-700">Automation</a></span>
              &nbsp;&nbsp;<SocialIcon network = "github" url="https://github.com/Proj-Valentine/mydashboard" rel="noreferrer" target="_blank" bgColor="white" fgColor="black" style={{ height: 25, width: 25 }} />
              &nbsp;<span><a href="https://github.com/Proj-Valentine/mydashboard" target="_blank" rel="noreferrer" style={{textDecoration:"none"}} className="mt-24 dark:text-gray-200 text-gray-700">ReactApp</a></span>
          </div>
        </div>
    </div>

  </div>
);

export default Footer



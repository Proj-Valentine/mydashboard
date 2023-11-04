import React from 'react';
import { SocialIcon } from 'react-social-icons';


const Footer = () => (
  <div className="mt-24f flex flex-col  dark:text-gray-200 text-gray-700 md:font-normal md:overflow-auto sm:font-normal">
    <p className="dark:text-gray-200 text-gray-700 justify-center text-center m-20">
      © 2023 All rights reserved by Valentine Kwame Ampah</p>
    

    

    <div className=" flex flex-row justify-center text-left m-2" style={{ width:"100%",textAlign:"center"}}>
      <div></div>
      <div className="flex flex-col">
          <div><p className="text-left" > Profile & Projects</p><br/></div>
          <div><p className="text-left"><SocialIcon  label="LindedIn" network= "linkedin" url="https://www.linkedin.com/in/valentine-ampah-b92a0198" target="_blank" style={{ height: 25, width: 25 }}/>
            &nbsp;<span><a href="https://www.linkedin.com/in/valentine-ampah-b92a0198" target="_blank"  rel="noreferrer" style={{textDecoration:"none"}} className="mt-24 dark:text-gray-200 text-gray-700"></a>LinkedIn</span></p></div>
          <div className=""  ><p className="text-left"><SocialIcon network = "github" url="https://github.com/Proj-Valentine/Python_Projects" rel="noreferrer" target="_blank" bgColor="white" fgColor="black" style={{ height: 25, width: 25 }} />
                &nbsp;<span><a href="https://github.com/Proj-Valentine/Python_Projects" target="_blank" rel="noreferrer" style={{textDecoration:"none"}} className="mt-24 dark:text-gray-200 text-gray-700"></a>Python Automation</span></p></div>
          <div className="" ><p className="text-left"><SocialIcon network = "github" url="https://github.com/Proj-Valentine/mydashboard" rel="noreferrer" target="_blank" bgColor="white" fgColor="black" style={{ height: 25, width: 25 }} />
                &nbsp;<span><a href="https://github.com/Proj-Valentine/mydashboard" target="_blank" rel="noreferrer" style={{textDecoration:"none"}} className="mt-24 dark:text-gray-200 text-gray-700"></a>React Reporting App</span></p></div>
          <div className="" ><p className="text-left"> <span><SocialIcon url="https://mail.google.com" style={{ height: 25, width: 25 }}/>&nbsp; vkampah28@gmail.com </span></p> </div>
          <div className="" > <br></br> <a href="#top" style={{textDecoration:"none", color:"white"}}>Back to Top</a> </div>

        </div>
        <div></div>
      </div>

  </div>
);

export default Footer



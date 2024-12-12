// footer.jsx
import React from "react";
import bookmyshow from './saiteja.png'
import facebook from './facebook.png'
import xx from './x.png'
import insta from './insta.png'
import youtube from './youtube.png'
import printest from './print.png'
import linked from './linkedinn.png'




const foooter = () => {
  return (
    <div className="down">
     <div className="show">
      <div className="firstline"></div>
      <div className="lineimage"><img src={bookmyshow} className="imageshow"/></div>
      <div className="firstline1"></div>
     </div>
     <div className="imagess">
     <img src={facebook} alt=""  className="logoo"/>
     <img src={xx} alt=""  className="logoo"/>
     <img src={insta} alt=""  className="logoo"/>
     <img src={youtube} alt=""  className="logoo"/>
     <img src={printest} alt=""  className="logoo"/>
     <img src={linked} alt="" className="logoo" />
     </div>

     <div className="mainfooter">
      Copyright 2024  © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
     </div>
     <div className="finall">
     The content and images used on this site are copyright protected and copyrights vests with the respective owners.The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.
     </div>
    </div>
  );
}

export default foooter;

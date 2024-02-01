import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./profile.css";
import myImage from "./image/Screenshot44.png";

const UserProfile = () => {
  const userData = useSelector((state) => state.userData);
  console.log(userData);

  return (
    <div className="separate">
      {userData && (
        <div className="identification">
          <div className="divimage">
            <img src={myImage} alt="Screenshot" />
            
            <p className="gitp">GitHub</p>
          </div>

         <div className="followers"> <p>Followers | 0 {userData.followers}</p></div>

         <div className="following"> <p>Following | 0 {userData.following}</p></div>
         <div className="location"> 
          <p > Location | United Kingdom,UK {userData.location} </p>
          </div>
          {/* Add other user information as needed */}
        </div>
      )}
    </div>
  );
};

export default UserProfile;

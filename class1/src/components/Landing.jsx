import React from "react";
import AOS from "aos";
import YourProjects from "./YourProjects";
import Pricing from "./Pricing";
import "../styles/Landing.css";

function Landing() {
    const userInfo = {
        username: "JohnDoe",
        email: "john.doe@example.com",
        bio: "Passionate developer with a love for creating innovative solutions and exploring new technologies."
    };

    return (
        <div className="bg-gray-900 flex justify-between items-start px-1 min-h-screen pb-20">
              <div className="flex-shrink-0 my-20 mx-20 flex-col items-center text-start w-1/4 pb-10 border-r-2 border-gray-700">
                  <img className="h-44 w-44 rounded-full object-cover object-center" src="/profile.webp" alt="profile image" />
                  
                  <div className="mt-4">
                      <label className="block text-gray-500 text-sm">Username</label>
                      <h2 className="text-white text-xl font-bold">{userInfo.username}</h2>
                  </div>

                  <div className="mt-4">
                      <label className="block text-gray-500 text-sm">Email</label>
                      <p className="text-gray-400">{userInfo.email}</p>
                  </div>

                  <div className="mt-4">
                      <label className="block text-gray-500 text-sm">Bio</label>
                      <p className="text-gray-300 mt-1">{userInfo.bio}</p>
                  </div>
              </div>
              <div className="flex-grow ml-4">
                  <YourProjects />
              </div>
        </div>
    );
}

export default Landing;

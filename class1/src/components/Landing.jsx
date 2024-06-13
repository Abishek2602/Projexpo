import React from "react";
import AOS from "aos";
import YourProjects from "./YourProjects";
import "../styles/Landing.css";

function Landing() {
    return (
        <div className="bg-gray-900 flex justify-between items-start px-1">
            <div className="flex-shrink-0">
                <div className="fixed my-20 mx-20">
                    <img className="h-44 w-44 rounded-full object-cover object-center" src="/profile.webp" alt="profile image" />
                </div>
            </div>
            <div className="flex-grow ml-4">
                <YourProjects />
            </div>
        </div>
    );
}

export default Landing;

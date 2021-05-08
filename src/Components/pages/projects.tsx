import React, { useState } from "react";
import ProjectCard from "../projectsCard";
import ProjectInfoModal from "../projectsInfoModal";
export const Projects = () => {
  const [modal, setModal] = useState(undefined);
  const projects: {
    name: string;
    link: string;
    thumbnail: string;
    blurb: string;
    git: any;
    photos: (string)[];
  }[] = [
    {
      name: "Brewery Finder",
      link: "Brewery-Finder",
      thumbnail:
        "https://devinarnold-website-content.s3.us-east-2.amazonaws.com/welcome_menu.png",
      blurb:
        "Flatiron School (Module 1 Project) - A simple CLI app for finding nearby brewerys, that give the user basic CRUD for a favorites list.",
      git: "https://github.com/darnold001/brewery_finder",
      photos: [],
    },
    {
      name: "E-commerce App",
      link: "ECommerce",
      git: "",
      thumbnail:
        "https://devinarnold-website-content.s3.us-east-2.amazonaws.com/ecommerce.png",
      blurb:
        "Flatiron School (Module 2 Project) - A very simple eCommerce site built with a Ruby on Rails MVC",
      photos: [],
    },
    {
      name: "Colorado Adventure Finder",
      link: "Adventure-fiunder",
      thumbnail:
        "https://devinarnold-website-content.s3.us-east-2.amazonaws.com/ride+buddy",
      blurb:
        "Flatiron School (Module 3 Project) - A very simple app for finding and saving mountain bike rides. Built on a decoupled architecture with a Ruby on Rails API and a vanilla JavaScript front end.",
      git: "https://github.com/darnold001/Travel_Buddy_FE",
      photos: [],
    },

    {
      name: "Trip Buddy",
      link: "trip-buddy",
      thumbnail:
        "https://devinarnold-website-content.s3.us-east-2.amazonaws.com/travel_buddy.jpg",
      blurb:
        "Flatiron School (Module 4 Project) - A very simple app for finding and saving trips. Built on a decoupled architecture with a Ruby on Rails API and a React front end. This app also utilizes Google Maps and Google Geocoding services.",
      git: "https://github.com/darnold001/Colorado_ActivityFinder",
      photos: [],
    },
    {
      name: "Rental Buddy",
      link: "rental-buddy",
      thumbnail:
        "https://devinarnold-website-content.s3.us-east-2.amazonaws.com/Rental%2BBuddy+(1).jpg",
      blurb:
        "Flatiron School (Module 5 Project) - An app to help facilitate maintenance requests betweeen property owners and tenants, as well as allows tenants to pay rent and keeps an active accounting for property owners. This app is built on a decoupled architecture with a React front end and a microservices back end built with GoLang and Rails. This app also leverages the Google Maps API, Twillio API and Stripe API.",
      git: "https://github.com/darnold001/Colorado_ActivityFinder",
      photos: [],
    },
    {
      name: "Analytics Dashboard",
      link: "analytics-dashboard",
      thumbnail:
        "https://devinarnold-website-content.s3.us-east-2.amazonaws.com/sawatch-dashboard-base.png",
      blurb:
        "Designed and updated major aspects of Sawatch's Analytics dashboard to expose Administators and users with the ability to quickly update and assign product licenses. I also led the effort in redesigning the UI as well as update all the code to ES6 syntax and React Hooks to durasticaly reduce the amount of unnecessary re-renders.",
      git: "N/A",
      photos: [
        "https://devinarnold-website-content.s3.us-east-2.amazonaws.com/dashboard-dev-settings.png",
        "https://devinarnold-website-content.s3.us-east-2.amazonaws.com/sawatch-dashboard-base.png",
      ],
    },
    {
      name: "Install Tracker",
      link: "install-tracker",
      thumbnail:
        "https://devinarnold-website-content.s3.us-east-2.amazonaws.com/Install_tracker_gantt.png",
      blurb:
        "Designed/built an app that quickly tracks the progress of large-scale fleet telematics installs. The App works by pulling heartbeat data from both the immediate device, as well as a telematics API and uses a Python analytics module to rectify/update the data, which is served via a Node.js/Express API.",
      git: "N/A",
      photos: [
        "https://devinarnold-website-content.s3.us-east-2.amazonaws.com/Install_tracker_gantt.png",
        "https://devinarnold-website-content.s3.us-east-2.amazonaws.com/install_tracker_chart.png",
      ],
    },
  ];
  return (
    <>
      <div className="projects">
        <div className="card-wrapper">
          {projects.reverse().map((p) => {
            return (
              <ProjectCard key={p.name} cardInfo={p} setModal={setModal} />
            );
          })}
        </div>
      </div>
      {modal !== undefined && (
        <ProjectInfoModal modal={modal} setModal={setModal} />
      )}
    </>
  );
};

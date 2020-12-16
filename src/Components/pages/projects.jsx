import React from "react";
import ProjectCard from "../projectsCard";
export default function Projects(props) {
  const projects = [
    {
      name: "Brewery Finer",
      link: "Brewery-Finder",
      thumbnail:
        "https://github.com/darnold001/brewery_finder/blob/master/assets/welcome_menu.png",
      blurb:
        "Flatiron School (Module 1 Project) A simple CLI app for finding nearby brewerys, that give the user basic CRUD for a favorites list.",
      git: "https://github.com/darnold001/brewery_finder",
    },
    {
      name: "E-commerce App",
      link: "ECommerce",
      thumbnail:
        "https://github.com/darnold001/brewery_finder/blob/master/assets/welcome_menu.png?raw=true",
      blurb:
        "Flatiron School (Module 2 Project) A very simple eCommerce site built with a Ruby on Rails MVC",
    },
    {
      name: "Colorado Adventure Finder",
      link: "Adventure-fiunder",
      thumbnail:
        "https://github.com/darnold001/Colorado_ActivityFinder/raw/master/GIFs/SaveARide.gif",
      blurb:
        "Flatiron School (Module 3 Project) A very simple app for finding and saving mountain bike rides. Built on a decoupled architecture with a Ruby on Rails API and a vanilla JavaScript front end.",
      git: "https://github.com/darnold001/Travel_Buddy_FE",
    },

    {
      name: "Trip Buddy",
      link: "trip-buddy",
      thumbnail:
        "https://devinarnold-website-content.s3.us-east-2.amazonaws.com/travel_buddy.jpg",
      blurb:
        "Flatiron School (Module 4 Project) A very simple app for finding and saving trips. Built on a decoupled architecture with a Ruby on Rails API and a React front end. This app also utilizes Google Maps and Google Geocoding services.",
      git: "https://github.com/darnold001/Colorado_ActivityFinder",
    },
    {
      name: "Rental Buddy",
      link: "rental-buddy",
      thumbnail:
        "https://devinarnold-website-content.s3.us-east-2.amazonaws.com/Rental+Buddy.jpg",
      blurb:
        "Flatiron School (Module 5 Project) An app to help facilitate maintenance requests betweeen property owners and tenants, as well as allows tenants to pay rent and keeps an active accounting for property owners. This app is built on a decoupled architecture with a React front end and a microservices back end built with GoLang and Rails. This app also levreges the Google Maps API, Twillio API and Stripe API",
      git: "https://github.com/darnold001/Colorado_ActivityFinder",
    },
  ];
  return (
    <div className="projects">
      <div className="card-wrapper">
        {projects.forEach((p) => {
          return <ProjectCard cardInfo={p} />;
        })}
      </div>
    </div>
  );
}

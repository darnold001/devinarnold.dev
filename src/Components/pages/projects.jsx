import React, { useState } from "react";
import ProjectCard from "../projectsCard";
import ProjectInfoModal from "../projectsInfoModal";
export default function Projects(props) {
  const [modal, setModal] = useState(undefined);
  const projects = [
    {
      name: "Brewery Finder",
      link: "Brewery-Finder",
      thumbnail:
        "https://devinarnold-website-content.s3.us-east-2.amazonaws.com/welcome_menu.png",
      blurb:
        "Flatiron School (Module 1 Project) - A simple CLI app for finding nearby brewerys, that give the user basic CRUD for a favorites list.",
      git: "https://github.com/darnold001/brewery_finder",
    },
    {
      name: "E-commerce App",
      link: "ECommerce",
      thumbnail: "https://devinarnold-website-content.s3.us-east-2.amazonaws.com/ecommerce.png",
      blurb:
        "Flatiron School (Module 2 Project) - A very simple eCommerce site built with a Ruby on Rails MVC",
    },
    {
      name: "Colorado Adventure Finder",
      link: "Adventure-fiunder",
      thumbnail:
        "https://devinarnold-website-content.s3.us-east-2.amazonaws.com/ride+buddy",
      blurb:
        "Flatiron School (Module 3 Project) - A very simple app for finding and saving mountain bike rides. Built on a decoupled architecture with a Ruby on Rails API and a vanilla JavaScript front end.",
      git: "https://github.com/darnold001/Travel_Buddy_FE",
    },

    {
      name: "Trip Buddy",
      link: "trip-buddy",
      thumbnail:
        "https://devinarnold-website-content.s3.us-east-2.amazonaws.com/travel_buddy.jpg",
      blurb:
        "Flatiron School (Module 4 Project) - A very simple app for finding and saving trips. Built on a decoupled architecture with a Ruby on Rails API and a React front end. This app also utilizes Google Maps and Google Geocoding services.",
      git: "https://github.com/darnold001/Colorado_ActivityFinder",
    },
    {
      name: "Rental Buddy",
      link: "rental-buddy",
      thumbnail:
        "https://devinarnold-website-content.s3.us-east-2.amazonaws.com/Rental%2BBuddy+(1).jpg",
      blurb:
        "Flatiron School (Module 5 Project) - An app to help facilitate maintenance requests betweeen property owners and tenants, as well as allows tenants to pay rent and keeps an active accounting for property owners. This app is built on a decoupled architecture with a React front end and a microservices back end built with GoLang and Rails. This app also levreges the Google Maps API, Twillio API and Stripe API.",
      git: "https://github.com/darnold001/Colorado_ActivityFinder",
    },
  ];
  console.log("called");
  return (
    <>
      <div className="projects">
        <div className="card-wrapper">
          {projects.reverse().map((p) => {
            return <ProjectCard cardInfo={p} setModal={setModal} />;
          })}
        </div>
      </div>
      {modal !== undefined && <ProjectInfoModal modal={modal} setModal = {setModal}/>}
    </>
  );
}

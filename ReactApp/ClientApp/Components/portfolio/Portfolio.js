import React, { useState } from "react";
import "./Portfolio.scss";
import PortfolioCollapse from "./PortfolioCollapse";
import PortfolioCollapseItem from "./PortfolioCollapseItem";
import { Button } from "react-bootstrap";

function Portfolio() {
  return (
    <>
      <div className="stars" />
      <div className="container d-flex flex-column justify-content-center my-5">
        <div className="my-3">
          <Button className="btn-outline-code-green" href="/">
            Return Home!
          </Button>
        </div>
        <PortfolioCollapse
          collapseId="year-2019"
          buttonText="2019"
          innerComponent={
            <PortfolioCollapseItem
              images={[
                {
                  src: "/assets/images/portfolio/JD/JDUBE.jpg",
                  alt: "Jordan Dube Personal Website",
                },
              ]}
              title="Jordan Dube Personal Website"
              description="This is a website I created for my friend Jordan who
                      needed a website that provided a central location for all
                      links to his social media and other projects."
            />
          }
        />

        <PortfolioCollapse
          collapseId="year-2018"
          buttonText="2018"
          innerComponent={
            <PortfolioCollapseItem
              images={[
                {
                  src: "/assets/images/portfolio/PersonalWebsite/Mclain.de.png",
                  alt: "Personal Website Mclain.de",
                },
              ]}
              title={<a href="https://www.mclain.de">Mclain.de</a>}
              description="One of the many iterations of my personal website. I began
                      it in 2018, building on my experience at Tyler
                      Technologies. It is built using ASP.Net MVC with cshtml,
                      JS/JQuery, CSS with an Entity Framework code first SQL
                      database for authentication and data. I have since
                      returned to it and updated it with more current projects
                      and an updated resume. I also have used it as my platform
                      for any little web app I want to spin up quickly for my
                      own personal use or that of my friends. The website you
                      are currently viewing is going to fully replace this
                      legacy website."
            />
          }
        />
        <PortfolioCollapse
          collapseId="year-2016"
          buttonText="2016"
          innerComponent={
            <>
              <PortfolioCollapseItem
                images={[
                  {
                    src: "/assets/images/portfolio/Crown And Country/landing page.png",
                    alt: "King And County Landing Page",
                  },
                  {
                    src: "/assets/images/portfolio/Crown And Country/Building.png",
                    alt: "King And County Building",
                  },
                  {
                    src: "/assets/images/portfolio/Crown And Country/FIN.png",
                    alt: "King And County Complete",
                  },
                ]}
                title="King and Country"
                description="During an internship at the CI2 lab on the USM campus while attending college, 
                I built this little medieval simulation game. 
                It is a top down view of a group of settlers who require direction. You are able to command them to: 
                build structures, cut down trees, hunt and much more all while they have a need for sleep, water, and hunger. 
                This is where I learned so much about C# and Unity, and was how I was able to launch 
                myself into ASP.Net at Tyler Technologies."
              />
              <PortfolioCollapseItem
                images={[
                  {
                    src: "/assets/images/portfolio/PCR/precision%20collision%20repair2.jpg",
                    alt: "Precision Collision Repair Website Image",
                  },
                ]}
                title="Precision Collision Repair"
                description="My very first fully developed website. I was just coming
                      off my 3rd year of college and a friend of mine from
                      high-school knew I was in this field and asked if I could
                      help him out with his company website! I made a simple
                      website using straight html, css, and js and published it
                      on GoDaddy."
              />
            </>
          }
        />
      </div>
    </>
  );
}

export default Portfolio;

import React, { useEffect, useState } from "react";
import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";
import style from "./Ourportfolio.module.css";

export default function Index() {
  const [ourportfolioData, setOurportfolioData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/Ourportfolio2")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Ourportfolio:", data);
        setOurportfolioData(data);
      })
      .catch((err) => console.error("Error fetching Ourportfolio:", err));
  }, []);

  if (!ourportfolioData) return null;

  const tabs = [
    { label: "All", key: "all" },
    { label: "Logo Design", key: "logo" },
    { label: "Branding", key: "branding" },
    { label: "Web Design", key: "web" },
    { label: "Animated Logo", key: "animated" },
  ];

  return (
    <section className={`section-padding ${style.ourportfolioData}`}>
      <Container>
       
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <div className="section-title">
              <h2
                dangerouslySetInnerHTML={{ __html: ourportfolioData.title }}
              />
              <p>{ourportfolioData.disc}</p>
            </div>
          </Col>
        </Row>

        <Tabs
          id="portfolio-tabs"
          defaultActiveKey="all"
          className={`mb-4 justify-content-center ${style.navtabs} ${style.portfolioTabs} ${style.pb04}`}
          justify
        >
          {tabs.map((tab) => (
            <Tab eventKey={tab.key} title={tab.label} key={tab.key}>
              <Row className="g-4">
                {(ourportfolioData.portfolio[tab.key] || []).map(
                  (item, index) => (
                    <Col lg={3} md={6} xs={12} key={index}>
                      <div className={`portfolio-item ${style.portfolioItem}`}>
                        <a
                          href={item.src}
                          data-fancybox="portfolio"
                          data-caption="Portfolio Item – Logo Outlets"
                        >
                          <img src={item.src} alt="Portfolio" loading="lazy" />
                        </a>
                      </div>
                    </Col>
                  )
                )}
              </Row>
            </Tab>
          ))}
        </Tabs>      
      </Container>
    </section>
  );
}

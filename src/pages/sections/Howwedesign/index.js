import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./Howwedesign.module.css";

export default function Index() {

    const [howwedesignData, setHowwedesignData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/Howwedesign1")
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched Howwedesign:", data);
                setHowwedesignData(data);
            })
            .catch((err) => console.error("Error fetching Howwedesign:", err));
    }, []);

    if (!howwedesignData) return null;

    return (
        <>
            <section className={`section-padding ${style.howwedesign}`}>
                <Container >
                    <Row className="justify-content-center text-center">
                        <Col lg={8}>
                            <div className={`section-title`}>
                                <h2 dangerouslySetInnerHTML={{ __html: howwedesignData.title }}></h2>
                                <p>{howwedesignData.disc}</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="g-4">
                        {howwedesignData.featureCard.map((item, index) => (
                            <Col lg={3} md={6} col={12} key={index}>
                                <div className={`featurecard ${style.featurecard} `}>
                                    <img src={item.image} width="50px" alt="Icon" loading="lazy" />
                                    <h5>{item.subheading}</h5>
                                    <p>{item.disc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
}

import React, { useEffect, useState } from "react";
import style from './Herobanner.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

export default function Index() {   
    const [homebannerData, setHomebannerData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/homebanner")
        .then((res) => res.json())
        .then((data) => {
            console.log("Fetched Homebanner:", data);
            setHomebannerData(data);
        })
        .catch((err) => console.error("Error fetching Homebanner:", err));
    }, []);

    if (!homebannerData) return null;

    return (
        <>
            <section id="hero" className={style.herosection}>
                <Container className={`${style.absolutecenter}`}>
                    <Row className="align-items-center gy-4 justify-content-center position-relative">
                        <Col lg={9} col={12} className="text-center">

                            <div className={`${style.aiherobadge} mb-3`}>                                
                                <FontAwesomeIcon icon={faStar} /> <span>{homebannerData.hero_badge}</span>
                            </div>

                            <div className={style.subheading}>{homebannerData.subheading}</div>
                            <h1 className="text-white" dangerouslySetInnerHTML={{ __html: homebannerData.title }} ></h1>
                            <p className={`${style.lead} mt-3 text-white lead`}>{homebannerData.description}</p>

                            <div className={`${style.herocta} align-items-center gap-2 position-relative ${style.mainfeild}`}>
                                <form action="#" method="get">
                                    <input type="text" placeholder="Enter Your Business Name" className={style.field} name="business_name" required/>
                                    <button type="submit" className={`btn btn-outline-light ${style.fieldButton}`}>Get's started</button>
                                </form>
                            </div>

                            <div className="mt-4 small text-muted">
                                <FontAwesomeIcon icon={faCheck} className={`${style.textred} me-1`} />
                                <span className="text-white">{homebannerData.text1}</span>

                                <span className="mx-2"></span>
``
                                <FontAwesomeIcon icon={faCheck} className={`${style.textred} me-1`} />
                                <span className="text-white">{homebannerData.text2}</span>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";


export default function Index() {

               const [contactbannerData, setContactbannerData] = useState(null);
          
            useEffect(() => {
              fetch("http://localhost:5000/api/Contactbanner")
                .then((res) => res.json())
                .then((data) => {
                  const doc = Array.isArray(data) ? data[0] : data;
                  setContactbannerData(doc);
                })
                .catch((err) => console.error("Error fetching Contact:", err));
            }, []);
          
            if (!contactbannerData) return null;
        
  return (
    <>
                        
               <section
                className="aboutbanner contanctbannerimg"
                style={{
                  backgroundImage: `url(${contactbannerData.contanctbannerimg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                  <Container className="absolute-center">
                      <Row className="justify-content-center text-center">
                          <Col lg={9} col={12}>
                            
                              <h1 className="text-white" dangerouslySetInnerHTML={{ __html: contactbannerData.title }}></h1>                                                           
                              <p className="lead mt-3 text-white">{contactbannerData.disc}</p>
                            
                          </Col>
                      </Row>
                  </Container>
              </section>
        
            </>
  )
}

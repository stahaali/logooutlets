import React, { useEffect, useState } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

export default function FaqSection() {

  const [faqData, setFaqData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/faq")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched FAQ:", data);
        setFaqData(data);
      })
      .catch((err) => console.error("Error fetching FAQ:", err));
  }, []);

  if (!faqData) return null;

  return (
    <>
      <section className="section-padding py-5 bg-light">
        <Container>

          <Row className="justify-content-center text-center mb-4">
            <Col lg={8}>
              <div className="section-title">
                <h2 
                  className="fw-bold" 
                  dangerouslySetInnerHTML={{ __html: faqData.heading }}
                ></h2>

                <p className="text-muted">{faqData.subheading}</p>
              </div>
            </Col>
          </Row>

          {/* FAQ List */}
          <Row className="justify-content-center">
            <Col lg={8}>
              <Accordion defaultActiveKey="0" flush>
                {faqData.faqs.map((item, index) => (
                  <Accordion.Item eventKey={index.toString()} key={item._id}>
                    <Accordion.Header>{item.question}</Accordion.Header>
                    <Accordion.Body>{item.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>

        </Container>
      </section>
    </>
  );
}

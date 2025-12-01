import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Index() {
  const [contactusData, setContactusData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/Contact")
      .then((res) => res.json())
      .then((data) => {
        const doc = Array.isArray(data) ? data[0] : data;
        setContactusData(doc);
      })
      .catch((err) => console.error("Error fetching Contact:", err));
  }, []);

  if (!contactusData) return null;

  return (
   <>
     <section id="contact" className="section-padding">
      <Container>

        {/* Heading */}
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <div className="section-title"><h2 dangerouslySetInnerHTML={{ __html: contactusData.title }}></h2>

              <p>{contactusData.subtitle}</p>
            </div>
          </Col>
        </Row>

        <Row className="g-4 align-items-stretch">
          
          {/* Left Form */}
          <Col lg={7}>
            <div className="contact-card h-100">
              <h3 className="mb-3">{contactusData.form_section.heading}</h3>

              <form>
                {contactusData.form_section.fields.map((field, idx) => (
                  <div className="mb-3" key={idx}>
                    <label className="form-label">{field.label}</label>

                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        className="form-control"
                        placeholder={field.placeholder}
                        rows={4}
                      ></textarea>
                    ) : field.type === "select" ? (
                      <select
                        name={field.name}
                        className="form-select"
                        defaultValue=""
                      >
                        <option value="">{field.placeholder}</option>
                        {field.options?.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        className="form-control"
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                ))}

                <button type="submit" className="btn btn-primary-custom">
                  {contactusData.form_section.button_text}
                </button>
              </form>
            </div>
          </Col>

          {/* Right Info Section */}
          <Col lg={5}>
            <div className="h-100 d-flex flex-column">

              <h3>{contactusData.info_section.heading}</h3>
              <p className="text-muted">{contactusData.info_section.description}</p>

              <ul className="contact-info-list list-unstyled mt-3">
                {contactusData.info_section.contact_items.map((item, idx) => (
                  <li key={idx}>
                    <i className={`fa fa-${item.icon}`}></i> {/* directly using fa-${icon} */}
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <h6>{contactusData.info_section.custom_note_title}</h6>
                <p className="small text-muted">
                  {contactusData.info_section.custom_note_description}
                </p>
              </div>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
   </>
  );
}

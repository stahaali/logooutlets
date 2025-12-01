import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./Footer.module.css";

export default function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/Footer")
      .then((res) => res.json())
      .then((data) => setFooterData(data))
      .catch((err) => console.error("Error fetching footer:", err));
  }, []);

  if (!footerData) return null;

  const firstColumnLinks = footerData.quicklinks.slice(0, 5);
  const secondColumnLinks = footerData.quicklinks.slice(5);

  return (
    <footer>
      <Container>
        <Row className="gy-4 align-items-start">
          
          {/* Logo + Description */}
          <Col lg={4} md={4} col={12}>
            <div className="d-flex align-items-center footerbrand mb-2">
              <img
                src={footerData.image}
                className={`img-fluid ${style.whitelogo}`}
                alt=""
                loading="lazy"
              />
            </div>
            <p className="small mb-2">{footerData.disc}</p>
          </Col>

          {/* Quick Links - Column 1 */}
          <Col lg={2} md={4} col={6}>
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              {firstColumnLinks.map((link, index) => (
                <li key={index}>
                  <a href={`/${link.toLowerCase().replace(/\s+/g, "-")}.php`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Quick Links - Column 2 */}
          <Col lg={2} md={4} col={6}>
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              {secondColumnLinks.map((link, index) => (
                <li key={index}>
                  <a href={`/${link.toLowerCase().replace(/\s+/g, "-")}.php`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Ready to Start */}
          <Col lg={4} md={12} col={12}>
            <h6 className="mb-3">Ready to Start?</h6>
            <p className="small mb-2">{footerData.readytostart}</p>
          </Col>

        </Row>
      </Container>

      <div className="footer-bottom text-center mt-4">
        © {new Date().getFullYear()} Logo Outlets. All rights reserved.
      </div>
    </footer>
  );
}

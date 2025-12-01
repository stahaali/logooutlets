import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import style from './Header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Index() {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/Menus")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched menu:", data);
        setMenuData(data);
      })
      .catch((err) => console.error("Error fetching menu:", err));
  }, []);

  if (!menuData || !menuData.brandLogo) return null;

  return (
    <>
      <header className={style.desktopmenu}>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <Container>
            <a className="navbar-brand d-flex align-items-center footer-brand" href="/">
              <img src={menuData.brandLogo} className={`img-fluid ${style.blacklogo}`} alt="Logo" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mainNavbar">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 priceonemenu">
                {menuData.items?.map((item, i) => {
                  let href = `/${item.toLowerCase().replace(/ /g, "-")}`;
                  let icon = null;

                  // Detect phone number
                  if (/^\d{3,}-\d{3,}-\d{4}$/.test(item)) {
                    href = `tel:${item}`;
                    icon = faPhone;
                  }

                  // Detect email
                  if (item.includes("@")) {
                    href = `mailto:${item}`;
                    icon = faEnvelope;
                  }

                  return (
                    <li key={i} className={`nav-item ${style.navitem}`} aria-haspopup="true">
                      <a href={href} className={`nav-link ${style.navlink}`}>
                        {icon ? <FontAwesomeIcon icon={icon} style={{ marginRight: "5px" }} /> : null}
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Container>
        </nav>
      </header>
    </>
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

export const Footer = () => {
  return (
    <section className="content contact">
      <h6 style={{ fontSize: 20, color: "white", paddingTop: 120 }}>
        Encontranos en:
      </h6>
      <div className="redes">
        <a href="" className="link" style={{ color: "rgb(252, 4, 68)" }}>
          <FontAwesomeIcon icon={faFacebook} className="link-icon" />
          <span className="link-redes-title">Facebook</span>
        </a>
        <a href="" className="link" style={{ color: "rgb(252, 4, 68)" }}>
          <FontAwesomeIcon icon={faTwitter} className="link-icon" />
          <span className="link-redes-title">Twitter</span>
        </a>
        <a href="" className="link" style={{ color: "rgb(252, 4, 68)" }}>
          <FontAwesomeIcon icon={faInstagram} className="link-icon" />
          <span className="link-redes-title">Intagram</span>
        </a>
        <a href="" className="link" style={{ color: "rgb(252, 4, 68)" }}>
          <FontAwesomeIcon icon={faGoogle} className="link-icon" />
          <span className="link-redes-title">Google</span>
        </a>
      </div>
      {/* pie de pagina  */}
      <footer className="my-5 pt-5 text-body-secondary text-center text-small">
        <p className="mb-1">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>
              ©Villalba Milagros ©Mereles Juliana ©Gonzalez Malena
            </font>
          </font>
        </p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Privacidad</font>
              </font>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Términos</font>
              </font>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Apoyo</font>
              </font>
            </a>
          </li>
        </ul>
      </footer>
      {/* scripts */}
    </section>
  );
};

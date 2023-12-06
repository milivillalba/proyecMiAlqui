import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/Footer";

function About() {
  const form = useRef();

  const inputs = document.querySelectorAll(".input");
  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }
  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }
  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xs1ph2h",
        "template_unhwo0k",
        form.current,
        "TleDato1ymybBY-p-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section
        className="py-5 text-center container"
        style={{ background: "rgb(252, 4, 68)" }}
      >
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-bold" style={{ color: "white" }}>
              Sobre nosotras
            </h1>
            <p className="lead body-secondary" style={{ color: "white" }}>
              Nuestro equipo está conformado por tres apasionados estudiantes de
              Desarrollo de Software Multiplataforma. Nos embarcamos en la
              creación y mantenimiento de este sitio web, inspirados por nuestro
              origen en el pintoresco interior de la provincia de Formosa. Nos
              enorgullece fusionar nuestras habilidades técnicas con nuestro
              arraigo local para brindar una experiencia única en línea.
              ¡Bienvenido a nuestro proyecto!
            </p>
          </div>
        </div>
      </section>

      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="img/historia.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1
              className="display-5 fw-bold body-emphasis lh-1 mb-3"
              style={{ background: "rgb(252, 4, 68)", color: "white" }}
            >
              {" "}
              Nuestra historia
            </h1>
            <p className="lead">
              A partir de nuestra experiencia al culminar la secundaria somos
              conscientes de lo desafiante que puede resultar hallar un lugar
              adecuando para mudarse y continuar con los estudios terciarios. La
              búsqueda implica consideraciones complejas como la seguridad, una
              ubicación estratégica que facilite la movilidad más la necesidad
              de sentirnos seguros en situaciones donde se requiere compartir
              información delicada o comunicarse con terceros para tomarlas de
              eficiente. En este contexto, nos propusimos desarrollar MiAlqui
              con el objetivo de simplificar este proceso, brindándote un
              espacio seguro y conveniente para encontrar el lugar perfeto que
              se ajuste a las necesidades de las diferentes situaciones
              predispuestas con las que realizan la búsqueda. Incluso el nuevo
              espacio donde tus aspiraciones podrán hacerse realidad.
            </p>
          </div>
        </div>
      </div>

      <section
        className="py-2 text-center container"
        style={{ background: "rgb(252, 4, 68)" }}
      >
        <h1 className="fw-bold" style={{ color: "white" }}>
          Nuestros objetivos
        </h1>
      </section>

      <div className="container px-4 py-5" id="custom-cards">
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
              <div
                className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
                style={{ background: "rgb(252, 4, 68)" }}
              >
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  {" "}
                  Facilitar la búsqueda.
                </h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
              <div
                className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
                style={{ background: "rgb(252, 4, 68)" }}
              >
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Ofrecer información detallada y verídica.
                </h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
              <div
                className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1"
                style={{ background: "rgb(252, 4, 68)" }}
              >
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Promover la seguridad.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="conteiner-contact">
        <div className="form-contact">
          <div className="contact-info">
            <h3 className="title"> Somos miAlqui </h3>
            <p className="text">
              Mediante esta forma te podes comunicar con nuestras
              desarrolladoras por algun inconveniente que presente la página.
            </p>

            <div className="info">
              <div className="information">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                <p>Don Bosco 2455</p>
              </div>
              <div className="information">
                <FontAwesomeIcon icon={faEnvelope} class="icon" />
                <p>miAlqui@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form ref={form} onSubmit={sendEmail}>
              <h3 className="title">Contáctanos</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="user_name"
                  className="input"
                  required
                />
                <label for="">Nombre completo</label>
                <span>Nombre completo</span>
              </div>
              <div className="input-container">
                <input type="email" name="subject" className="input" required />
                <label for="">Correo electrónico</label>
                <span>Correo electrónico</span>
              </div>
              <div className="input-container textarea">
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  className="input"
                ></textarea>
                <label for="">Asunto</label>
                <span>Asunto</span>
              </div>
              <input type="submit" value="Enviar" className="btn-conta" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;

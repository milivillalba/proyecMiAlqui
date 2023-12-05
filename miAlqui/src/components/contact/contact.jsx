import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Header } from "../header/header";
import { Footer } from "../footer/Footer";
import Swal from 'sweetalert2';

export const Contact = () => {
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
      ) .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Correo enviado',
            text: '¡Tu correo se ha enviado correctamente!',
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Error al enviar el correo',
            text: 'Hubo un problema al enviar el correo. Por favor, inténtalo de nuevo.',
          });
        }
      );
    e.target.reset();
  
  };

  return (
    <>
    <Header/>
    <div className="conteiner-contact">
    <div className="form-contact">
    <div className="contact-info">
        <h3 className="title"> Somos miAlqui </h3>
        <p className="text">
            Mediante esta forma te podes comunicar con nuestras desarrolladoras por algun inconveniente que presente la página.
        </p>

        <div className="info">
            <div className="information">
             {/* Los iconos tienen su formato react */}
              {/* FALTA ICONO ACA */}
              <FontAwesomeIcon icon={faLocationDot} className="icon"/>
              <p>Don Bosco 2455</p>
            </div>
            <div className="information">
            {/* Los iconos tienen su formato react */}
            <FontAwesomeIcon icon={faEnvelope} className="icon"/>
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
                <input type="text" name="user_name" className="input" required/>
                <label htmlFor="">Nombre completo</label>
                <span>Nombre completo</span>
            </div>
            <div className="input-container">
                <input type="email" name="subject" className="input" required/>
                <label htmlFor="">Correo electrónico</label>
                <span>Correo electrónico</span>
            </div>
            <div classNÇ="input-container textarea">
                <textarea name="message" cols="30" rows="10" className="input"></textarea>
                <label htmlFor="">Asunto</label>
                <span>Asunto</span>
            </div>
            <input type="submit" value="Enviar" className="btn-conta"/>
          </form>
       </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { fetchWithOutAuth } from "../../api/authApi";
import { useFormLogin } from "../../hook/useFormLogin";
import "../registerUser/registerUser.css";

//import de img/video
import video from "../registerUser/LoginImg/4140f6fa067e46f738a3d402b8dbd6de.mp4";
import logo from "../registerUser/LoginImg/teletrabajo.png";

//import icons

const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const { values, handleInputChange, reset } = useFormLogin({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await fetchWithOutAuth("auth/signin", "POST", values);
    if (resp.user) {
      // Disparar la acción para modificar el estado global
      login(resp);

      // Persistencia
      localStorage.setItem("user", JSON.stringify(resp.user));
      localStorage.setItem("token", JSON.stringify(resp.token));

      alert("¡Bienvenid@!");
      reset();

      // Obtener la última ruta visitada
      const lastPath = localStorage.getItem("lastPath");
      return navigate(lastPath || "/AdminUser");
    } else {
      alert(resp.msg);
    }
  };

  const { username, password } = values;

  return (
    <div className="loginPage flex">
      <div className="contanier flex">
        <div className="gifDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">
              Crea un usuario para poder ver más información
            </h2>
            <p>Alquilar ahora es más fácil con MIALQUI</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">¿No tienes una cuenta?</span>
            <Link to="/auth/register">
              <button className="btn">Registrarse</button>
            </Link>
          </div>
        </div>
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Imagen" />
            <h3>Bienvenido a MIALQUI</h3>
          </div>
          <h1>Login</h1>
          <form onSubmit={handleSubmit} action="">
            <div className="inputDiv">
              <div className="input flex">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Ingrese usuario"
                  onChange={handleInputChange}
                  value={username}
                  name="username"
                />
              </div>
            </div>

            <div className="inputDiv">
              <div className="input flex">
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Ingrese contraseña"
                  onChange={handleInputChange}
                  value={password}
                  name="password"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

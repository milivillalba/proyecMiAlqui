import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { fetchWithOutAuth } from "../../api/authApi";
import { useFormLogin } from "../../hook/useFormLogin";
 //css
 import '../registerUser/registerUser.css'

 //import de img/video
import video  from '../registerUser/LoginImg/4140f6fa067e46f738a3d402b8dbd6de.mp4'
import logo from '../registerUser/LoginImg/teletrabajo.png'
//import icons
import { FaUserShield } from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

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
      // Se dispara la acción para modificar el estado global
      login(resp);

      // Persistencia
      localStorage.setItem("user", JSON.stringify(resp.user));
      localStorage.setItem("token", JSON.stringify(resp.token));

      alert("Bienvenid@!!!");
      reset();

      // Se obtiene la última ruta visitada
      const lastPath = localStorage.getItem("lastPath");
      return navigate(lastPath || "/home");
    } else {
      alert(resp.msg);
    }
  };

  const { username, password } = values;

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <h1>Login</h1>
          <form onSubmit={handleSubmit} action="">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Ingrese usuario"
              onChange={handleInputChange}
              value={username}
              name="username"
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Ingrese contraseña"
              onChange={handleInputChange}
              value={password}
              name="password"
            />

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

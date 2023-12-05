import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useFormLogin } from "../../hook/useFormLogin";
import {Link } from 'react-router-dom'

//css
import './registerUser.css'

//import de img/video
import video  from './LoginImg/4140f6fa067e46f738a3d402b8dbd6de.mp4'
import logo from './LoginImg/teletrabajo.png'

//import icons
import { MdMarkEmailRead } from 'react-icons/md'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'


export const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const { values, handleInputChange } = useFormLogin({
    email: '',
    username: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validación de entrada
    if (!values.email || !values.username || !values.password) {
      alert('Por favor, complete todos los campos');
      return;
    }
  
    try {
      const resp = await fetch('http://localhost:5500/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          username: values.username,
          password: values.password,
        }),
      });
      
      const responseData = await resp.json();
      console.log('Respuesta del servidor:', responseData);
  
      if (resp.status === 201) {
        alert('El usuario ha sido creado con éxito');
        localStorage.setItem("token", responseData.token);
        navigate('/auth/login');
      } else {
        alert('No se pudo crear el usuario');
      }
    } catch (error) {
      alert('No se pudo crear el usuario');
      console.error(error);
  
      if (error instanceof Response && error.headers.get('content-type').includes('application/json')) {
        const responseBody = await error.json();
        console.error('Error response body:', responseBody);
      }
    }
  };
  
  
  return (
    <div className='registerPage flex '>
      <div className="contanier-register flex">
        <div className=" gifDiv">
        <video src={video} autoPlay muted loop  ></video>

          <div className='textDiv'>
              <h2 className='title-regis'> Create un usuario para poder ver más informacion</h2>
              <p>Alquilar ahora es más facil con MIALQUI</p>
          </div>

          <div className='footerDiv flex'>
             <span className='text-regis'>Tengo una cuenta</span>
            <Link to= {'/auth/login'}>
              <button className='btn-regis'>Login</button>
           </Link>
      </div>
      </div>
      <div className='formDiv flex'>
        <div className='headerDiv'>
           <img src= {logo} alt="Logo Imagen" className="imgregi"/>
           <h1>Bienvenido a MIALQUI</h1>
         </div>
          <form onSubmit={handleSubmit} action="" className='form grid'>

          <div className="inputDiv">
            <label htmlFor='username' className="label-register">Usuario</label>
            <div className="input-regis flex">
            <MdMarkEmailRead className='icon-regis'/>
            <input
              type="username"
              id='username'
              className='input-regis'
              placeholder='Ingrese usuario'
              onChange={handleInputChange}
              value={values.username}
              name="username"
            />
            </div>
         </div>
            
         <div className="inputDiv">
           <label htmlFor='email'>Email</label>
           <div className="input-regis flex">
           <MdMarkEmailRead className='icon-regis'/>
            <input
              type="email"
              id='email'
              className=''
              placeholder='Ingrese email'
              onChange={handleInputChange}
              value={values.email}
              name="email"
            />
           </div>
         </div>

         <div className="inputDiv">
           <label htmlFor='password'>Password</label>
           <div className="input-regis flex">
           <BsFillShieldLockFill className='icon-regis'/>
            <input
              type="password"
              id='password'
              className=''
              placeholder='Ingrese contraseña'
              onChange={handleInputChange}
              value={values.password}
              name="password"
            />
            </div>
         </div>

            <button type="submit" className='btn-regis flex '>
            <samp>Registro</samp>
            <AiOutlineSwapRight className='icon-regis'/>
            </button>
            <samp className='forgotPassword'>
             Olvidaste tu contraseña? <a href="">Click Aquí</a>
            </samp>
          </form>
        </div>
      </div>
    </div>
  );
};




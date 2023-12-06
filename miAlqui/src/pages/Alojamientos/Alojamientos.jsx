import React, { useEffect, useState } from "react";
import { fetchAlojamiento } from "../../api/alojamientoApi";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/Footer";

export const Alojamientos = () => {
  const [alquileres, setAlquileres] = useState([]);

  useEffect(() => {
    const obtenerAlojamientos = async () => {
      try {
        const data = await fetchAlojamiento("api/alojamiento", "GET");
        console.log("Datos obtenidos:", data);
        setAlquileres(data);
      } catch (error) {
        console.error("eeroor a obtener aloja", error);
      }
    };
    obtenerAlojamientos();
  }, []);
  return (
    <>
      <Header />
      <div className="card-container row">
        {alquileres.map((alojamiento) => (
          <div key={alojamiento.id} className="card col-md-4  mb-3">
            {/* Muestra la imagen */}
            <img
              src={`../../../archivos/${alojamiento.converImage.split("/")[2]}`}
              alt="Alojamiento"
              className="card-img-top img-fluid"
              style={{ maxHeight: "200px" }}
            />

            <div className="card-body">
              {/* Muestra el título */}
              <h5 className="card-title">{alojamiento.tituloAlojamiento}</h5>

              {/* Muestra lugares cercanos */}
              <p className="card-text">
                <b>Lugares Cercanos:</b> {alojamiento.lugaresSercanos}
              </p>

              {/* Otros detalles del alojamiento, por ejemplo, descripción, precio, etc. */}
              <p className="card-text">{alojamiento.descripcion}</p>
              <p className="card-text">
                <b>Precio : $</b> {alojamiento.precio}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

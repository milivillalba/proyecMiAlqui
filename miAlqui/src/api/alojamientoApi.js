import { env } from "../config/config"

//eesta funcion"fethAlojamiento toma 3 parametros "route""ruta de la api)" "method"(metodo htttp) y "payload"(cuerpo d ela solicitud pot o put )
export const fetchAlojamiento = async (route, method, payload) => {
    //construccion de la url
  const url = `${env.SERVER_PATH}/${route}`; //conbina la url del servidor con la ruta especifica del alojamiento para obtener la url completa
//creo un switch para manejar los diferentes metodos http"GET, PUT, POST,DELETE"

  switch (method) {
    case "GET":
      try {
        //si la solicitud es exitosa convierte la respuesta en json y la retorna
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error en la solicitud GET:", error);
        throw error;
      }

    case "POST":
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error en la solicitud POST:", error);
        throw error;
      }

    case "PUT":
      try {
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error en la solicitud PUT:", error);
        throw error;
      }

    case "DELETE":
      try {
        const response = await fetch(url, {
          method: "DELETE",
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error en la solicitud DELETE:", error);
        throw error;
      }

      //en caso que proporcione un metodo no admitido imrime un mensaje de error 
    default:
      console.error("Método no admitido:", method);
      throw new Error("Método no admitido");
  }
};

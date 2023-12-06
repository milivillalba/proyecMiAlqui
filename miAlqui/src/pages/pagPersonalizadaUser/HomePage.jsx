import { InactiveUser } from "../../components/UserPersonalizado/InactiveUser";
import { Alojamientos } from "../Alojamientos/Alojamientos";

export const HomePage = () => {
  return (
    <>
      <InactiveUser />
      <div className="listadoSection container mt-5">
        <div className="heading flex">
          <h1 className="display-4">Listado de Páginas</h1>
        </div>
        <div className="row mt-4">
          <div className="col-md-8">
            <Alojamientos />
          </div>
        </div>
      </div>
    </>
  );
};

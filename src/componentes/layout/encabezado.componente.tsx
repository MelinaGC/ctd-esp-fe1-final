import { Link } from "react-router-dom";
import "./encabezado.css";

/**
 * Layout that has the links to navigate between the pages.
 *
 * @returns {JSX.Element}
 */

const Encabezado = () => {
  return (
    <header>
      <div>
        <div>
          <h2>Examen Final de Frontend IV</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
            <li>
              <Link to="/detalle/1">Detalle</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Encabezado;

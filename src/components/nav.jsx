import "bootstrap/dist/css/bootstrap.css";
import "./nav.css";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-gray-71">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          PosUtilitie
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav nav m-left-30">
            {/* Inicio */}
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>

            {/* Tienda */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tienda
              </a>
              <ul class="dropdown-menu bg-gray-71">
                <li>
                  <a class="dropdown-item" href="#">
                    Ventas
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Devoluciones
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Compras
                  </a>
                </li>
              </ul>
            </li>

            {/* Productos */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </a>
              <ul class="dropdown-menu bg-gray-71">
                <li>
                  <a class="dropdown-item" href="#">
                    Stok
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Garantias
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Nuevo producto
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul class="navbar-nav">
            {/* Autenticacion */}
            <li class="nav-item dropdown m-right-50">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Stiven Arz
              </a>
              <ul class="dropdown-menu bg-gray-71">
                <li>
                  <a class="dropdown-item" href="#">
                    Mi cuenta
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Iniciar sesion
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Cerrar sesion
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

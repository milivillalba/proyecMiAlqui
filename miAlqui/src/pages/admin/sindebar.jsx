import React from "react";

export const SindebarAdminAloj = () => {
    return (
      <>
        <div>
          <div
            className="d-flex flex-column flex-shrink-0 bg-light"
            style={{ width: "4.5rem" }}
          >
            <a
              href="/"
              className="d-block p-3 link-dark text-decoration-none"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Icon-only"
            >
              <svg className="bi" width={40} height={32}>
                <use xlinkHref="#bootstrap" />
              </svg>
              <span className="visually-hidden">Icon-only</span>
            </a>
            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link active py-3 border-bottom"
                  aria-current="page"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Home"
                  aria-describedby="tooltip215246"
                >
                  <svg
                    className="bi"
                    width={24}
                    height={24}
                    role="img"
                    aria-label="Home"
                  >
                    <use xlinkHref="#home" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link py-3 border-bottom"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Dashboard"
                >
                  <svg
                    className="bi"
                    width={24}
                    height={24}
                    role="img"
                    aria-label="Dashboard"
                  >
                    <use xlinkHref="#speedometer2" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link py-3 border-bottom"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Orders"
                >
                  <svg
                    className="bi"
                    width={24}
                    height={24}
                    role="img"
                    aria-label="Orders"
                  >
                    <use xlinkHref="#table" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link py-3 border-bottom"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Products"
                >
                  <svg
                    className="bi"
                    width={24}
                    height={24}
                    role="img"
                    aria-label="Products"
                  >
                    <use xlinkHref="#grid" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link py-3 border-bottom"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Customers"
                >
                  <svg
                    className="bi"
                    width={24}
                    height={24}
                    role="img"
                    aria-label="Customers"
                  >
                    <use xlinkHref="#people-circle" />
                  </svg>
                </a>
              </li>
            </ul>
            <div className="dropdown border-top">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="img/teletrabajo.png"
                  alt="mdo"
                  width={24}
                  height={24}
                  className="rounded-circle"
                />
              </a>
              <ul
                className="dropdown-menu text-small shadow"
                aria-labelledby="dropdownUser3"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };
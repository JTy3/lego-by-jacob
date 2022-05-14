import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border rounded-3 my-3 container">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Lego by Jacob
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link aria-current="page" href="/">
                <a className="nav-link active">Home</a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Discover
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link href="/themes">
                    <a className="dropdown-item">Themes</a>
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sets
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Minifigs
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Parts
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

import { Link, useNavigate } from "react-router-dom";
import cheems from "../img/cheems.png";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-start align-items-center border-bottom w-100 shadow sticky-top p-3 h-10 position-relative">
      {" "}
      {/* Titulo */}
      <div
        className="d-flex border-end align-items-center"
        type="button"
        onClick={() => navigate("/")}
      >
        <h4>Cheemsificador </h4>
        <img src={cheems} className="img-fluid" width="50px" />
      </div>
      {/* Links */}
      <div className="about-button d-flex">
        <div className="d-flex align-items-center me-5">
          <i class="fa-solid fa-sun me-2" />
          <div className="form-check  form-switch d-flex">
            <input type="checkbox" className="form-check-input" role="switch" />
          </div>
          <i class="fa-solid fa-moon" />
        </div>
        <Link to="about">
          <i class="fa-solid fa-circle-info fs-3" />
        </Link>
      </div>
    </div>
  );
}

export default Header;

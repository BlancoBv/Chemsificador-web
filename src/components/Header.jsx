import { Link, useNavigate } from "react-router-dom";
import cheems from "../img/cheems.png";
function Header() {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex justify-content-start align-items-center border-bottom w-100 shadow sticky-top p-3"
      style={{ height: "10vh" }}
    >
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
      <div className="d-flex flex-fill justify-content-center ">
        {" "}
        <Link to="about">Acerca de</Link>
      </div>
    </div>
  );
}

export default Header;

import cheems from "../img/cheems.png";
function Header() {
  return (
    <div
      className="d-flex justify-content-center align-items-center border-bottom w-100 shadow sticky-top"
      style={{ height: "10vh" }}
    >
      <h4>Chemsificador </h4>
      <img src={cheems} className="img-fluid" width="50px" />
    </div>
  );
}

export default Header;

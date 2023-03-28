import cheems from "../img/cheems.png";
function Header() {
  return (
    <div
      className="d-flex justify-content-start align-items-center border-bottom w-100 shadow sticky-top p-3"
      style={{ height: "10vh" }}
    >
      <h4>Cheemsificador </h4>
      <img src={cheems} className="img-fluid" width="50px" />
    </div>
  );
}

export default Header;

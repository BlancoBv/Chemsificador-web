import { useState } from "react";

function Content() {
  const [texto, setTexto] = useState(null);
  const [resultado, setResultado] = useState(" ");

  const handleTexto = (e) => {
    setTexto(e.target.value);
  };

  const Comparacion = (e, texto) => {
    e.preventDefault();
    const vocales = ["a", "e", "i", "o", "u"];
    const excepciones = ["m", "n", "r"];
    //const letraAnterior = "";
    const nuevaCadena = texto;
    setResultado(nuevaCadena);
  };
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center container-fluid"
      style={{ minHeight: "80vh" }}
    >
      {/* Formulario */}
      <div className=" mt-3 mb-3">
        <form onSubmit={(e) => Comparacion(e, texto)}>
          <div>
            <label className="form-label">Texto a chemsificar </label>
            <textarea className="form-control" onChange={handleTexto} />
          </div>
          <button type="submit" className="btn btn-primary mt-3 ">
            ¡Cheemsificar!
          </button>
        </form>
      </div>
      <div>
        <label className="form-label">Resultado</label>
        <textarea className="form-control" value={resultado} readOnly />
      </div>
    </div>
  );
}

export default Content;

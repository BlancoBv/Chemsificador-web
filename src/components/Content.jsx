import { useState } from "react";
import TextGlobe from "./TextGlobe";

function Content() {
  const [texto, setTexto] = useState(null);
  const [resultado, setResultado] = useState(" ");
  const [showGlobe, setShowGlobe] = useState({ status: false, error: false });

  const handleTexto = (e) => {
    const valor = e.target.value;
    const regExp = new RegExp(/^.+/, "gi");
    if (regExp.test(valor)) {
      setTexto(valor);
    } else {
      setTexto(null);
    }
  };

  const comparacion = (e, texto) => {
    e.preventDefault();

    let nuevaCadena = [];
    const vocales = new RegExp("^[aeiou]$", "i");
    const excepciones = new RegExp("^[mnr]$", "i");
    /* Ciclo que recorre la lista */

    for (let i = 0; i < texto.length; i++) {
      const letraAnterior = texto[i];
      const letraNext = texto[i + 1];

      if (vocales.test(letraAnterior)) {
        if (vocales.test(letraNext) || excepciones.test(letraNext)) {
          nuevaCadena.push(letraAnterior, letraNext);
        } else {
          nuevaCadena.push(letraAnterior, "m", letraNext);
        }
      } else {
        nuevaCadena.push(letraAnterior, letraNext);
      }
    }
    const eDeletes = () => {
      return texto.length - 2;
    };
    return [nuevaCadena, eDeletes()];
  };

  const limpiar = (e, texto) => {
    try {
      let [cadena, numDeletes] = comparacion(e, texto);
      let contadorDeletes = 0;

      for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === cadena[i + 1]) {
          cadena.splice(i, 1, "");
          contadorDeletes += contadorDeletes;

          if (contadorDeletes === numDeletes) {
            break;
          }
        }
      }
      setResultado(cadena.join(""));
      setShowGlobe({ status: true, error: false });
    } catch (error) {
      setShowGlobe({ status: true, error: true });
      setResultado("Intenta ingresar un texto primero que nada...");
      setTimeout(() => {
        setShowGlobe({ status: false, error: false });
      }, 2000);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center container-fluid position-relative overflow-hidden h-90">
      {/* Formulario */}
      <TextGlobe
        show={showGlobe.status}
        text={resultado}
        close={() => setShowGlobe({ status: false, error: false })}
        error={showGlobe.error}
      />

      <form
        className="form-container translate-middle d-flex flex-column align-items-center"
        onSubmit={(e) => limpiar(e, texto)}
      >
        <div>
          <label className="form-label ">Texto a chemsificar </label>
          <textarea
            rows="10"
            className="form-control resize-none"
            onChange={handleTexto}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3 ">
          ¡Cheemsificar! {document.body.clientWidth}
        </button>
      </form>

      {/*   <div>
        <label className="form-label">Resultado</label>
        <textarea className="form-control" value={resultado} readOnly />
      </div> */}
    </div>
  );
}

export default Content;

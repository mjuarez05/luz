import { useState } from "react";
import axios from "axios";

function App() {
  const [estado, setEstado] = useState("apagada");
  const RASPBERRY_IP = "http://192.168.0.221:5000";

  const controlarLampara = async (accion) => {
    try {
      const response = await axios.get(`${RASPBERRY_IP}/${accion}`);
      setEstado(response.data.status);
    } catch (error) {
      console.error("Error al conectar con la Raspberry", error);
    }
  };

  return (
    <section>
      <div className={`foco ${estado === "encendida" ? "foco-encender": "foco-apagar"}`}>
        <div className='base-filamento'></div>
        <div className='filamento'></div>

        <div className='base'></div>
      </div>

      <div className='botonera'>
        <button className='prende' onClick={() => controlarLampara("encender")}>
          Encender
        </button>
        <button className='apaga' onClick={() => controlarLampara("apagar")}>
          Apagar
        </button>
      </div>
    </section>
  );
}

export default App;

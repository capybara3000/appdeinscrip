import React from "react";

function Tarjeta1() {
  return (
    <div style={{ width: "40rem" }}>
      <div className="card">
        <div className="card-header">
          <h4>Contacto</h4>
          <div className="card-body">
            <p className="card-text">
              <div className="row">
                <div className="col">
                  <h6 className="card-title">Numero de telefono</h6>
                </div>
                <div className="col">
                  <h6 className="card-title">
                    Numero telefonico de emergencia{" "}
                  </h6>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Text input with checkbox"
                    />
                  </div>
                </div>
                <div className="col">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Text input with checkbox"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h6 className="card-title">Correo electronico </h6>
                </div>
                <div className="col">
                  <h6 className="card-title">Usa Whatsapp o llamadas?</h6>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Text input with checkbox"
                    />
                  </div>
                </div>
                <div className="col">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Text input with checkbox"
                    />
                  </div>
                <div/>
              </div>

                  {/* cada tarjeta es de esto */}
                  <div className="row">
                    <div className="col">
                      <h6 className="card-title">
                        Numero de telefono de Whatsapp del encargado
                      </h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          aria-label="Text input with checkbox"
                        />
                      </div>
                    </div>
                  </div>
                    {/* Termina aca */}



              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tarjeta1;

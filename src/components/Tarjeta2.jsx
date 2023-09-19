import React from "react";

function Tarjeta2 () {
    return (
      <div>
 <div style={{ width: "40rem" }}>
      <div className="card">
        <div className="card-header">
          <h4>Personal</h4>
          <div className="card-body">
            <p className="card-text">
              <div className="row">
                <div className="col">
                  <h6 className="card-title">Nombre del mocoso</h6>
                </div>
                <div className="col">
                  <h6 className="card-title">
                    Cuantos anos tiene el mocoso{" "}
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
                  <h6 className="card-title">Quien es el encargado </h6>
                </div>
                <div className="col">
                  <h6 className="card-title">Fecha de nacimiento</h6>
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


      </div>
    );
  }

export default Tarjeta2;
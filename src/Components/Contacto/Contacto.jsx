import React from "react";

const Contacto = () => {
  return (
    <div className="container">
      <div className="row">
        <h3>Contácto</h3>
        <hr />
        <div className="col-7">
          <div className="mb-3">
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Nombre
              </label>
              <input
                class="form-control"
                type="text"
                placeholder="Nombre"
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Apellido
              </label>
              <input
                class="form-control"
                type="text"
                placeholder="Apellido"
                aria-label="default input example"
              />
            </div>
            <label for="exampleInputEmail1" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Nunca relevaremos tu correo Electrónico.
            </div>
          </div>
          <div className="input-group">
            <span className="input-group-text">Mensaje</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <button className="btn btn-success">Enviar</button>
          </div>
        </div>
        <div className="col-5">
          <h5>Todo Guitarras</h5>
          <p>Casa especializada en venta de guitarras y accesorios </p>
          <p>Dirección Av. 18 de Julio 2130</p>
          <p>Teléfono: +598 29014949</p>
          <iframe
            className="d-flex item-align-center"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.1689281186927!2d-56.17920928435764!3d-34.90220998086048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81b4c0a7dfcb%3A0x5d01dc912092d3d2!2sAv.%2018%20de%20Julio%201815%2C%2011200%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses-419!2suy!4v1650397146381!5m2!1ses-419!2suy"
            width="400"
            height="200"
            title="mapa"
          ></iframe>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Contacto;

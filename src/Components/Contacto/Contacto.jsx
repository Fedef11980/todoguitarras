
import React, { useEffect } from 'react'

const Contacto = () => {

 

  return (

    <div className='container'>
      <div className="row">
        <h3>Contácto</h3>
        <hr />
        <div className="col-7">
          <div className="mb-3">
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Nombre</label>
              <input class="form-control" type="text" placeholder="Nombre" aria-label="default input example"/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Apellido</label>
              <input class="form-control" type="text" placeholder="Apellido" aria-label="default input example"/>
            </div>
            <label for="exampleInputEmail1" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">Nunca relevaremos tu correo Electrónico.</div>
          </div>
          <div className="input-group">
            <span className="input-group-text">Mensaje</span>
            <textarea className="form-control" aria-label="With textarea"></textarea>
          </div>
        
        </div>
        <div className="col-5">
          <h5>Todo Guitarras</h5>
          <p>Casa especilaizada en venta de guitarras</p>
          <div>
            <iframe src="https://goo.gl/maps/XfvZor8U1Vde13ig6" frameborder="0"></iframe> 
          </div>
        </div>        
      </div>
      <br />
    </div>
  )
}

export default Contacto
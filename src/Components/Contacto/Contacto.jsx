import { wind } from 'fontawesome'
import React, { useEffect } from 'react'

const Contacto = () => {

  const handleclick = (e) =>{
    console.log (e)
    console.log (e.nativeEvent)
  }


  /* useEffect(()=>{
    
    window.addEventListener("click", handleclick)
    
    return ()=>{
      window.removeEventListener("click",handleclick)
    }


  },[]) */

  return (

    <div onClick={handleclick}>
      Contacto

    </div>
  )
}

export default Contacto
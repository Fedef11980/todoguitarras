import React, { useEffect, useState } from 'react'

const Nosotros = () => {

  const [isMobile, setIsMobile] = useState(false)

  console.log (window.visualViewport.width)

  useEffect(()=>{
    const checkMobile = (event) => {
      console.log(event)
      if (window.visualViewport.width <= 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }    

    checkMobile()

    window.addEventListener("resize",checkMobile)

    return ()=>{
      window.removeEventListener("resize",checkMobile)
    }

  },[])
    
  return (
    <div>
     <h2>Nosotros</h2> 
     <hr />
      {
        isMobile
        ? <h4>Estamos en mobile</h4>
        : <h4>Estamos en desktop</h4>
      }
    </div>
  )
}

export default Nosotros
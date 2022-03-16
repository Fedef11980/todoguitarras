import React from 'react'

function ItemDetails({lista}) {
  return (
    <div>
        {lista.map((guitar,i )=><li key = {i}> {guitar.description}</li>
        
        )}

    </div>
  )
}

export default ItemDetails
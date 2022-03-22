import React, { useEffect, useState } from "react";
import ItemDetails from "./ItemDetails";

const ItemDetailContainer = () => {
  const [guitarra, setGuitarras] = useState([]);
  useEffect(() => {
    const obtenerGuitar = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let guitarra = [
            {
              id: 5,
              marca: "Gibson",
              description:
                "Ebony de la serie Gibson USA Modern ofrece el auténtico sonido de la Les Paul. El cuerpo de caoba ligera con reducción de peso asi como el mástil de caoba encolado con un delgado perfil promete alta ergonomía incluso durante largas sesiones de grabación o conciertos.",
              model: "Les Paul Studio",
              price: 2570,
              stock: 3,
              pictureURL: "../public/img/lesPaulStudio.jpg",
            },
          ];
          if (guitarra.length === 0) {
            reject("Consultar Stock");
          } else {
            resolve(guitarra);
          }
        }, 2000);
      });
    };
    obtenerGuitar().then((guitarra) => {
      console.log(guitarra);
      setGuitarras([...guitarra]);
    });
  });

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        <ItemDetails {...guitarra} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;

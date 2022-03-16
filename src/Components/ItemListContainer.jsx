import React, { useEffect, useState } from "react";
import ItemList from "../Components/ItemList";

const printGuitars = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let guitars = [
        {
          id: 2,
          marca: "Jackson",
          description:
            "La Jackson King V™ KVXMG tiene un cuerpo de álamo, mástil de arce a través del cuerpo y cápsulas humbucker activas EMG® 85 (mástil) y 81 (puente) que entregan un tono bien equilibrado con graves ajustados, medios cristalinos y agudos crujientes. Su diapasón de laurel de radio compuesto se curva más dramáticamente hacia la cejilla para facilitar los acordes y se aplana cuando se acerca a la unión del mástil para evitar el trasteo. Otras características incluyen un trémolo Floyd Rose® Special con bloqueo doble, 24 trastes jumbo, y selector de cápsulas de tres vías.",
          model: "King V",
          price: 800,
          pictureURL: "../public/img/jacksonVKing.jpg",
        },
        {
          id: 3,
          marca: "Fender",
          description:
            "La Stratocaster es una guitarra de cuerpo macizo, obtenido a partir de una a tres piezas de madera. El mástil va unido atornillado, salvo en algunos modelos Custom, donde se encola o es una única pieza (Neck-through). Originalmente el cuerpo era de fresno del sur (swamp ash), una madera dura y porosa.",
          model: "Stratocaster",
          price: 1200,
          pictureURL: "../public/img/fenderStrato.jpg",
        },
      ];
      if (guitars === 0) {
        reject("Consultar Stock");
      } else {
        resolve(guitars);
      }
    }, 2000);
  });
};

const ItemListContainer = ({ titulo }) => {
  const [productos, setProducts] = useState();
  useEffect(() => {
    printGuitars()
      .then((guitars) => {
        setProducts(guitars);
        return guitars;
      })
      .then((stock) => {
        if (stock.lenght === 2) throw new Error("Quedán 2 en sotck");
      })
      .catch((err) => {
        console.log("Consulto Stock" + err);
      });
  }, []);

  console.log(productos);

  return (
    <div>
      <h1 className="text-center py2">{titulo}</h1>
      <ItemList card={productos} />
    </div>
  );
};

export default ItemListContainer;

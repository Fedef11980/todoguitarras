import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();
  console.log(categoryId);

  const guitars = [
    {
      id: 1,
      marca: "Gibson",
      description:
        "Están hechas con madera Korina, una marca comercial de limba, una madera similar pero más ligera que la caoba. Los primeros prototipos se fabricaron en 1957. Estas Flying V, junto con las Explorer e, inicialmente, la Moderne, formaban una línea modernista diseñada por el entonces presidente Ted McCarty. Estos diseños buscaban darle un aspecto más futurista a la imagen de Gibson, pero no tuvieron éxito en las ventas. La línea inicial lanzada en 1958 se dejó de fabricar en 1959.",
      model: "Flying V",
      price: 1800,
      stoc: 3,
      picture: "/img/GibsonFlyingV.png",
      categoria: "electricas",
    },
    {
      id: 2,
      marca: "Jackson",
      description:
        "La Jackson King V™ KVXMG tiene un cuerpo de álamo, mástil de arce a través del cuerpo y cápsulas humbucker activas EMG® 85 (mástil) y 81 (puente) que entregan un tono bien equilibrado con graves ajustados, medios cristalinos y agudos crujientes. Su diapasón de laurel de radio compuesto se curva más dramáticamente hacia la cejilla para facilitar los acordes y se aplana cuando se acerca a la unión del mástil para evitar el trasteo. Otras características incluyen un trémolo Floyd Rose® Special con bloqueo doble, 24 trastes jumbo, y selector de cápsulas de tres vías.",
      model: "King V",
      price: 800,
      stock: 4,
      pictureURL: "/img/jacksonVKing.jpg",
      categoria: "electricas",
    },
    {
      id: 3,
      marca: "Fender",
      description:
        "La Stratocaster es una guitarra de cuerpo macizo, obtenido a partir de una a tres piezas de madera. El mástil va unido atornillado, salvo en algunos modelos Custom, donde se encola o es una única pieza (Neck-through). Originalmente el cuerpo era de fresno del sur (swamp ash), una madera dura y porosa.",
      model: "Stratocaster",
      price: 1200,
      stock: 3,
      pictureURL: "/img/fenderStrato.jpg",
      categoria: "electricas",
    },
    {
      id: 4,
      marca: "Ibanez S",
      description:
        "Diapasón de palisandro. El palo de rosa proporciona un tono sólido bien equilibrado con un rango medio enfocado. El mástil Wizard delgado, plano y rápido de Ibanez es fuerte y resistente y ofrece una jugabilidad ilimitada y cuenta con un diapasón de 24 trastes de dos octavas para una amplia gama tonal. Las pastillas Quantum proporcionan una respuesta de graves acelerada para un seguimiento excepcionalmente rápido de riffs staccato de alta velocidad con un rango medio aplastante y una articulación precisa de gama alta",
      model: "521S",
      price: 570,
      stock: 6,
      pictureURL: "/img/ibanez521S.jpg",
      categoria: "electricas",
    },
    {
      id: 5,
      marca: "Gibson",
      description:
        "Ebony de la serie Gibson USA Modern ofrece el auténtico sonido de la Les Paul. El cuerpo de caoba ligera con reducción de peso asi como el mástil de caoba encolado con un delgado perfil promete alta ergonomía incluso durante largas sesiones de grabación o conciertos.",
      model: "Les Paul Studio",
      price: 2570,
      stock: 3,
      pictureURL: "/img/lesPaulStudio.jpg",
    },
    {
      id: 6,
      marca: "Taylor",
      description:
        "Escala: 25-1/2 Nut & Saddle: Tusq. Bracing: Nylon Bracing. Truss Rod Cover: Indian Rosewood. Pickguard: No. Número de trastes: 20. Clavijas: Nylon Nickel w/Pearloid Buttons. Estuche: Taylor Standard Hardshell Black. Encordado de fabrica: DAddario Classical Extra Hard Tension. Largo de cuerpo: 20",
      model: "314ce",
      price: 2200,
      stock: 3,
      pictureURL: "/img/taylor314.jpg",
      categoria: "electroAcusticas",
    },
  ];

  const printGuitars = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (guitars.length === 0) {
          reject("Consultar Stock");
        } else {
          resolve(guitars);
        }
      }, 2000);
    });
  };
  useEffect(() => {
    printGuitars()
      .then((resp) => setProducts(resp))
      .then((res) => {
        if (!categoryId) {
          setProducts(res);
        } else {
          setProducts(res.filter((prod) => prod.categoria === categoryId));
        }
      })
      .catch((err) => {
        console.log("Consulto Stock" + err);
      })
      .finally(() => setLoading(false));
  });

  return (
    <div>
      <h1 className="text-center py2">Todo Guitarra</h1>
      {loading ? <p>...Cargando...</p> : <ItemList card={productos} />}
    </div>
  );
};

export default ItemListContainer;

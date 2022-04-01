import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const instruments = [
  {
    id: 1,
    marca: "PRS",
    description:
      "La madre de todas las guitarras PRS es la Custom 24. A lo largo de los años ha habido pocos cambios aquí, pero ¿para qué? Mientras tanto, puede elegir entre las pastillas 57/08, 59/09 u 85/15 en lugar de las clásicas pastillas vintage bass/HFS y el nuevo Pattern Neck, que también está disponible en una versión delgada y que corresponde a un moderno mástil en forma de C. Paul Reed Smith ha sido capaz de desarrollar una línea independiente que desde hace tiempo se ha establecido como un clásico como ningún otro. A través de una afinación específica, ha desarrollado constantemente la interpretación de sus instrumentos y siempre ha tenido en mente tanto al músico como al guitarrista, que es sinónimo de un aspecto extraordinario.",
    model: "Custom 24 BW",
    price: 1650,
    stock: 4,
    pictureURL: "/img/prsCustom.jpg",
    categoria: "electricas",
  },
  {
    id: 2,
    marca: "Gibson",
    description:
      "Están hechas con madera Korina, una marca comercial de limba, una madera similar pero más ligera que la caoba. Los primeros prototipos se fabricaron en 1957. Estas Flying V, junto con las Explorer e, inicialmente, la Moderne, formaban una línea modernista diseñada por el entonces presidente Ted McCarty. Estos diseños buscaban darle un aspecto más futurista a la imagen de Gibson, pero no tuvieron éxito en las ventas. La línea inicial lanzada en 1958 se dejó de fabricar en 1959.",
    model: "Flying V",
    price: 1800,
    stock: 3,
    pictureURL: "/img/gibsonFlyingV.jpg",
    categoria: "electricas",
  },
  {
    id: 3,
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
    id: 4,
    marca: "Fender",
    description:
      "La Stratocaster es una guitarra de cuerpo macizo, obtenido a partir de una a tres piezas de madera. El mástil va unido atornillado, salvo en algunos modelos Custom, donde se encola o es una única pieza (Neck-through). Originalmente el cuerpo era de fresno del sur (swamp ash), una madera dura y porosa.",
    model: "Stratocaster YJM",
    price: 2200,
    stock: 3,
    pictureURL: "/img/fenderStrato.jpg",
    categoria: "electricas",
  },
  {
    id: 5,
    marca: "Ibanez S",
    description:
      "La guitarra eléctrica S Series S771PB de Ibanez presenta un cuerpo de caoba ligero y esculpido con una tapa de madera de álamo en un acabado plano natural y un mástil de arce atornillado Wizard III con un diapasón de palisandro de 24 trastes encuadernados e incrustaciones de puntos blancos compensados. . El sólido cuerpo de doble cutaway brinda la máxima resonancia y sustain, mientras que el mástil Wizard III es delgado, plano y rápido, pero fuerte, y brinda una jugabilidad ilimitada para el músico más exigente.",
    model: "771PB",
    price: 570,
    stock: 6,
    pictureURL: "/img/ibanez521S.jpg",
    categoria: "electricas",
  },
  {
    id: 6,
    marca: "Gibson",
    description:
      "Ebony de la serie Gibson USA Modern ofrece el auténtico sonido de la Les Paul. El cuerpo de caoba ligera con reducción de peso asi como el mástil de caoba encolado con un delgado perfil promete alta ergonomía incluso durante largas sesiones de grabación o conciertos.",
    model: "Les Paul Studio",
    price: 2570,
    stock: 3,
    pictureURL: "/img/lesPaulStudio.jpg",
    categoria: "electricas",
  },
  {
    id: 7,
    marca: "Taylor",
    description:
      "Escala: 25-1/2 Nut & Saddle: Tusq. Bracing: Nylon Bracing. Truss Rod Cover: Indian Rosewood. Pickguard: No. Número de trastes: 20. Clavijas: Nylon Nickel w/Pearloid Buttons. Estuche: Taylor Standard Hardshell Black. Encordado de fabrica: DAddario Classical Extra Hard Tension. Largo de cuerpo: 20",
    model: "314ce",
    price: 2200,
    stock: 3,
    pictureURL: "/img/taylor314.jpg",
    categoria: "electroAcusticas",
  },
  {
    id: 8,
    marca: "Mayones",
    description:
      "Mayones Guitars & Basses, established in 1982, is a manufacturer of electric guitars and bass guitars, located in Gdańsk, Poland. They specialize in building handcrafted and custom instruments. Mayones instruments are truly handmade in a traditional luthier style accompanied with state-of-art technology and equipped with top class components. The result is always the same a top notch instrument with soul and built-in inspiration. All Mayones instruments are 100% handcrafted",
    model: "Duvel",
    price: 2200,
    stock: 2,
    pictureURL: "/img/mayonesDuvell.jpg",
    categoria: "electricas",
  },
  {
    id: 9,
    marca: "Fender",
    description:
      "Richie Kotzen es considerado uno de los mejores y más versátiles guitarristas y celebrado tanto con sus álbumes en solitario como como miembro de bandas como Mr. Big o Poison. En cooperación con Fender, Richie Kotzen desarrolló un instrumento de firma basado en la Telecaster que satisface sus altas exigencias en sonido y manejo. La Fender Richie Kotzen Signature Telecaster tiene un cuerpo de fresno coronado por una atractiva tapa de arce rizado. El mástil de arce se atornilla al cuerpo según la tradición de Fender y tiene un diapasón de arce, que está equipado con 22 trastes jumbo. El radio plano del diapasón de 12 garantiza una jugabilidad cómoda incluso con piezas rápidas.",
    model: "Telecaster R. Kotzen",
    price: 2350,
    stock: 2,
    pictureURL: "/img/fenderTele.jpg",
    categoria: "electricas",
  },
  {
    id: 10,
    marca: "Laney",
    description:
      "Laney IRT Studio. 15W (2xEL84). 3 Canales: clean, rhythm y lead. Clean booster regulable y seleccionable por canal. 2 Secciones de EQ de 3 bandas: una común para el canal clean y rhythm y una exclusiva para el canal de lead. EQ con potenciometros Push-Pull y función frecuency shift. Control de tono. Reverb, función dinámica regulable (speaker damping). Reductor de potencia: del máximo a menos de 1W. Salida de altavoz con emulador operativo incluso sin pantalla. Puerto USB para salida de grabación y conexión con el ordenador y función re-amp. 2 unidades de rack. Entrada MP3.",
    model: "IRT Studio",
    price: 900,
    stock: 2,
    pictureURL: "/img/laneyStudio.jpg",
    categoria: "ampsV",
  },
];
export const printGuitars = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (instruments.length === 0) {
        reject("Consultar Stock");
      } else {
        resolve(instruments);
      }
    }, 2000);
  });
};

const ItemListContainer = () => {
  const [productos, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    printGuitars()
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
  }, [categoryId]);

  return (
    <div>
      <h1 className="text-center py2">Todo Guitarra</h1>
      {loading ? <p>...Cargando...</p> : <ItemList card={productos} />}
    </div>
  );
};

export default ItemListContainer;

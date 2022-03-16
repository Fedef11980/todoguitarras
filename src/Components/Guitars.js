const guitars = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let guitarra = [
          {
            id: 4,
            marca: "Ibanez S",
            description:
              "Diapasón de palisandro. El palo de rosa proporciona un tono sólido bien equilibrado con un rango medio enfocado               El mástil Wizard delgado, plano y rápido de Ibanez es fuerte y resistente y ofrece una jugabilidad ilimitada y cuenta con un diapasón de 24 trastes de dos octavas para una amplia gama tonal. Las pastillas Quantum proporcionan una respuesta de graves acelerada para un seguimiento excepcionalmente rápido de riffs staccato de alta velocidad con un rango medio aplastante y una articulación precisa de gama alta",
            model: "521S",
            price: 570,
            pictureURL: "../public/img/ibanez521S.jpg",
          },
        ];
        if (guitarra === 0) {
          reject("Consultar Stock");
        } else {
          resolve(guitarra);
        }
      }, 2000);
    });
  };

function getGuitar(id){
    fetch(`${guitars}/${id}`)
    .then ((resultado)=>resultado.json())
    .then ((guit)=>{
        console.log(guit);
    })
}    

getGuitar(4)  

export function getItem() {
    return fetch(`${guitars}`) 

}
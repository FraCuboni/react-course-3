import './Card.css';



// RENDERING CONDIZIONALE
// CON OPERATORE &&
// controintuitivo ma molto utilizzato
function Card({ title, description, imgURL, isVisited }) {


    return (
        <div className="card">
            <div className="image-box">
                <img className="image" src={imgURL} alt="" />
            </div>
            <div className="text-box">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                {
                    // se è visitata manda a schermo 
                    isVisited && <span>Visitata</span>
                }
                {
                    // se non è visitata manda a schermo 
                    !isVisited && <span>Non Visitata</span>
                }
            </div>
        </div>

    )

}
export default Card;

// RENDERING CONDIZIONALE
// CONDIZIONALE CON TERNARIO IN COSTANTE
// function Card({ title, description, imgURL, isVisited }) {

//     const visitedLabel = isVisited ? "Visitata" : "Non Visitata";

//     return (
//         <div className="card">
//             <div className="image-box">
//                 <img className="image" src={imgURL} alt="" />
//             </div>
//             <div className="text-box">
//                 <h2 className="card-title">{title}</h2>
//                 <p className="card-description">{description}</p>
//                 <span>{visitedLabel}</span>
//             </div>
//         </div>

//     )

// }

// RENDERING CONDIZIONALE
// condizionale tag con operatore ternario
// function Card({ title, description, imgURL, isVisited }) {

//     return (
//         <div className="card">
//             <div className="image-box">
//                 <img className="image" src={imgURL} alt="" />
//             </div>
//             <div className="text-box">
//                 <h2 className="card-title">{title}</h2>
//                 <p className="card-description">{description}</p>

//                 {isVisited ? <span>Visitata</span> : <span>Non Visitata</span>}
//             </div>
//         </div>

//     )

// }


// RENDERING CONDIZIONALE
// CONDIZIONALE TAG CON IF E ELSE
// function Card({ title, description, imgURL, isVisited }) {

//     if (isVisited) {
//         return (
//             <div className="card">
//                 <div className="image-box">
//                     <img className="image" src={imgURL} alt="" />
//                 </div>
//                 <div className="text-box">
//                     <h2 className="card-title">{title}</h2>
//                     <p className="card-description">{description}</p>
//                     <span>Visitata</span>
//                 </div>
//             </div>

//         )

//     } else {
//         return (
//             <div className="card">
//                 <div className="image-box">
//                     <img className="image" src={imgURL} alt="" />
//                 </div>
//                 <div className="text-box">
//                     <h2 className="card-title">{title}</h2>
//                     <p className="card-description">{description}</p>
//                     <span>Non Visitata</span>
//                 </div>
//             </div>

//         )

//     }

// }



// PROPS CON PASSAGGIO DI UN OGGETTO ASSOCIATO A COSTANTI
// function Card(props) {

//     // creo proprietà della card
//     const title = props.title;
//     const description = props.desc;
//     const imgURL = props.imgURL;

//     return (
//         <div className="card">
//             <div className="image-box">
//                 <img className="image" src={imgURL} alt="" />
//             </div>
//             <div className="text-box">
//                 <h2 className="card-title">{title}</h2>
//                 <p className="card-description">{description}</p>
//             </div>
//         </div>

//     )
// }

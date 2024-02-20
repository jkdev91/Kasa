
// import { getAllAppartments } from "../services/appartmentService";
import Card from "../card/card.jsx";

import { getAllAppartments } from "../../services/appartmentService.js";

const Gallery = () => {

  const appartments = getAllAppartments();

  return (
      <div className="card-container">

      {/* TODO display each appartment and the associated data according to the mockup in a nice card */}
      {/* {getAllAppartments().map((appartment) => {
        return(
          <Card key = {appartment.id} id= {appartment.id} cover = {appartment.cover} title = {appartment.title}/>

        )
      }
      )} */}
        {appartments.map(data => {
          return (

        <Card key = {data.id} id= {data.id} cover = {data.cover} title = {data.title}/>
          )

        })}
      </div>
  )
}
  
export default Gallery
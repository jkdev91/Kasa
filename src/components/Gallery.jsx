
import { getAllAppartments } from "../services/appartmentService";
import Card from "./card";

const Gallery = () => {

  return (
      <div className="card-container">

      {/* TODO display each appartment and the associated data according to the mockup in a nice card */}
      {getAllAppartments().map((appartment) => {
        return(
          // <p key={appartment.id}>{appartment.title}</p>)}  
          
          <Card key = {appartment.id} cover = {appartment.cover} title = {appartment.title}/>

        )
      }
      
      )}
      </div>
  )
}
  
export default Gallery
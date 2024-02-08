
// import { getAllAppartments } from "../services/appartmentService";
import Datas from "../assets/appartmentData.json"
import Card from "./card";

const Gallery = () => {

  return (
      <div className="card-container">

      {/* TODO display each appartment and the associated data according to the mockup in a nice card */}
      {/* {getAllAppartments().map((appartment) => {
        return(
          <Card key = {appartment.id} id= {appartment.id} cover = {appartment.cover} title = {appartment.title}/>

        )
      }
      )} */}
        {Datas.map(data => {
          return (

        <Card key = {data.id} id= {data.id} cover = {data.cover} title = {data.title}/>
          )

        })}
      </div>
  )
}
  
export default Gallery
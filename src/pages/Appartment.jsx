import {useParams} from "react-router-dom";
import { getAllAppartments } from "../services/appartmentService";
// TODO look at SOLID principles + ETC (easy to change) principle
import Tag from "../components/tag/Tag";
import Rating from "../components/rating/rating";
import Accordion from "../components/accordion/Accordion";

import { getAppartmentById } from "../services/appartmentService";
import NotFound from "./NotFound";
import Carousel from "../components/carousel/Carousel";

const Appartment = () => {
  
  const {id} = useParams();
  // console.log(id)
  const appartmentcurrentdata = getAppartmentById(id)
  const appartall = getAllAppartments()

  console.log(appartall)
  console.log(appartmentcurrentdata)
  
  if (!appartmentcurrentdata) {
    return <NotFound />
  }
  
  
  // useEffect( () => [id, appartmentcurrentdata])

  const name = appartmentcurrentdata.host.name.split(' ')
  const rating = appartmentcurrentdata.rating
  const description = appartmentcurrentdata.description
  const equipments = appartmentcurrentdata.equipments
  const pictures = appartmentcurrentdata.pictures



  // TODO with this id get the correct appartment from the JSON list of appartments
  return (
    <>
        <Carousel data = {pictures}/>

        <div className="appartmentSheet">
          <div className="appartmentSheet-content">
            <div className="appartmentSheet-content__infos">
              <h1>{appartmentcurrentdata.title}</h1>
              <p>{appartmentcurrentdata.location}</p>
              <div className="tags">
                {appartmentcurrentdata.tags.map((tag, index) => <Tag key= {index} tag= {tag} />)}
              </div>
            </div>

            <div className="appartmentSheet-content__host">
              <div className="host-infos">
                <div className="host-infos__name">
                  <span>{name[0]}</span>
                  <span>{name[1]}</span>
                </div>
                <img src= {appartmentcurrentdata.host.picture} alt= "photo de l'host"/>
              </div>  

              <div className="host-rating">
                <Rating rating={rating} />
              </div>
              
            </div>

          </div>

          <div className="accordion-appartement">
            <div className="accordion-appartment_items">
              <Accordion title={'Description'} content={description}/>
            </div>
            <div className="accordion-appartment_items">
              <Accordion title={'Equipement'} content={equipments}/>
            </div>


          </div>
      
       </div>
    </>
    )
  }
  
  
  
  export default Appartment

       
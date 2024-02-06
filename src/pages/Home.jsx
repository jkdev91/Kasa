import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import { getAllAppartments } from "../services/appartmentService";

const Home = () => {

  return (
    <>
      <Banner />
      {/* <div className="card-container"> */}
      {/* <h2>homepage</h2> */}
      {/* TODO display each appartment and the associated data according to the mockup in a nice card */}
      {/* {getAllAppartments().map((appartment) => {
        return(
          <p key={appartment.id}>{appartment.title}</p>)}

        )
      } */}

      <Gallery />

      
      {/* </div> */}
    </>
  )
}
  
export default Home
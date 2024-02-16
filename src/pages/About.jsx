
import Accordion from "../components/Accordion";
import { getAboutDatas } from "../services/appartmentService";
import Banner from "../components/Banner";

const About = () => {


  const aboutData = getAboutDatas() 

  
  return (
    <>
    <Banner imgUrl = {"../images/Image source 2.png"} />

    <div className="accordion-container">
    {aboutData.map(data => {
      return (
        <div key={data.id} className="accordion-container_bloc">
          <Accordion title={data.title} content={data.content}/>  

        </div>

          
          )
        })}

    </div>
  


    </>
    )
  


}

  
  export default About
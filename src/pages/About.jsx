
import Accordion from "../components/Accordion";
import { getAboutDatas } from "../services/appartmentService";
import Banner from "../components/Banner";

const About = () => {


  const aboutData = getAboutDatas() 

  
  return (
    <>
    <Banner imgUrl = {"../images/Image source 2.png"} />

    {aboutData.map(data => {
      return (
        <Accordion style={{width: '100 %;'}} key={data.id} title={data.title} content={data.content}/>  

      )
    })}

  


    </>
    )
  


}

  
  export default About
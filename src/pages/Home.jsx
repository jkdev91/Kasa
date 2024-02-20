import Banner from "../components/banner/Banner.jsx";
import Gallery from "../components/gallery/Gallery.jsx";

const Home = () => {

  return (
    <>
      <Banner imgUrl = {"../images/Image source 1.png"} ishomepage={true}/>

      <Gallery />

    </>
  )
}
  
export default Home


const Banner = (prop) => {

    return (
      <div className="banner-countainer">
      <img src={prop.imgUrl} alt="banner photo 1" />
      <h2 className="banner-text">Chez vous, partout et ailleurs</h2>

      </div>
    )
  }
  
  export default Banner


const Banner = ({imgUrl, ishomepage}) => {

    return (
      <div className="banner-countainer">
      <img src={imgUrl} alt="banner photo 1" />
      {ishomepage && <h2 className="banner-text">Chez vous, partout et ailleurs</h2>}

      </div>
    )
  }
  
  export default Banner
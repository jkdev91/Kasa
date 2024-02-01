import { Link } from "react-router-dom"


const NotFound = () => {

    return (
      <> 
        <h2>404</h2>

        <p> la page n'a pas été trouvé</p>
        <Link to={"/"}>
            <p>Homepage</p>
        </Link>
      </>
    )
  }
  
  export default NotFound
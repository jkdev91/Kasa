import { Link } from "react-router-dom"


const NotFound = () => {

    return (
      <div className="error-container"> 
        <h2 className="error-title">404</h2>

        <p className="error-message"> Oups! La page que vous demandez n'existe pas.</p>
        <Link to={"/"}>
            <p className="error-returnLink">Retourner sur la page d'accueil</p>
        </Link>
      </div>
    )
  }
  
  export default NotFound
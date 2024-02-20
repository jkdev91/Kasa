import { Link } from "react-router-dom"

const Card = ({id, cover, title}) => {

    return (
        <div className="card-appartment">
            <Link to ={`appartments/${id}`} >
                <img src={cover} alt={'kasa-' + title} />
                <h3>{title}</h3>

            </Link>    

        </div>
     
    )
  }
  
  export default Card
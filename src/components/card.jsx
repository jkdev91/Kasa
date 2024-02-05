import { Link } from "react-router-dom"

const Card = () => {

    return (
        <div className="card-appartment">
            <Link to ={`appartments/${id}`} >
                <img src={cover} alt="" />
                <h3>{title}</h3>

            </Link>    

        </div>
     
    )
  }
  
  export default Card
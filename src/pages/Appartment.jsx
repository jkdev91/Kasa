import {useParams} from "react-router-dom";

const Appartment = () => {

    const {id} = useParams();

    console.log(id);

    // TODO with this id get the correct appartment from the JSON list of appartments

    return (
        <div>
        <h2>fiche Appartment</h2>
        <p>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. A nam optio voluptatem beatae
            non corrupti, voluptate neque, possimus veniam quod 
            excepturi fuga soluta cumque eos amet! Quisquam officiis minus vitae?
        </p>
        </div>
    )
  }
  
  export default Appartment

       
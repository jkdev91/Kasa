
import redstar from '../../assets/star-active.png';
import greystar from '../../assets/star-inactive.png';


const Rating = ({rating}) => {

    return (
        <>
        {[...Array(5)].map((star, index) => {
            const ratingvalue = index + 1;

            return(
            <img key= {index} src={rating >= ratingvalue ? redstar : greystar}  alt="star" />
            )
        })
        }

        </>
    
        )}
    
  export default Rating
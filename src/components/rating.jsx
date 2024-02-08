
import redstar from '../assets/'
import greystar from '../star-inactive.png';

console.log(greystar)

const Rating = ({rating}) => {

    return (
        <>
        {[...Array(5)].map((index) => {
            const ratingvalue = index + 1;

            return(
            <img src={rating >= ratingvalue ? redstar : greystar  }  alt="star" />
            )
        })
        }

        </>
    
        )}
    
  export default Rating
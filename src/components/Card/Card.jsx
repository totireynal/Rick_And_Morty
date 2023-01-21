// import style from './Card.module.css';
import {Link} from 'react-router-dom';

function Card({name, species, gender, image, onClose, id}) {
   return (
      <div>
         <button onClick={onClose}>X</button>
         <img src={image} alt={name} />
         <Link to={`/detail/${id}`}> 
            <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         
      </div>
   );
}

export default Card;


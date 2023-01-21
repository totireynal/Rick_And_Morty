import Card from '../Card/Card';
// import style from './Cards.module.css';

function Cards({characters, onClose}) { // proprs -- [{...}, {...}, {...}]
   
   return (
   <div>
      {characters.map(({id, name, species, gender, image}) => { // puedo hacer un destructuring aca del objeto {id, name, species, gender,image} y asi no tengo que escribir cada vez character
         return (
         <Card 
         key={id}
         name={name}
         species={species}
         gender={gender}
         image={image}
         id={id}
         onClose={() => onClose(id)}
         />
         )
      })
      }
   </div>
   )
}

export default Cards;
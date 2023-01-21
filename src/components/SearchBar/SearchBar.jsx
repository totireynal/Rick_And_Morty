import style from './SearchBar.module.css'
import { useState } from 'react';

const SearchBar = ({onSearch}) => {

   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      <div className={style.bar}>
         <input type='search' value={character} onChange={handleChange}/>
      <button className={style.btn} onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}

export default SearchBar;

//las propiedades viajan para abajo, del padre al hijo
// los eventos viajan para arriba, viaja al padre y le avisa.
// parametro onclick de esa forma para que no se ejecute
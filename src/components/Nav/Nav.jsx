import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'
import { Link } from "react-router-dom";


const Nav = ({onSearch}) => {
    return (

            <nav className={style.nav}>
                <Link to='/about'>About</Link>
                <Link to='home'>Home</Link>
                <SearchBar onSearch={onSearch}/>
            </nav>
    )
}

export default Nav;
import styles from "./Search.module.css"
import { BiSearchAlt } from 'react-icons/bi';
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/UseQuery";

export function Search() {
    const [searchText, setSearchText] = useState("");
    const history = useHistory(); // Con este hook obtenemos el historial de navegacion, nuestra url
    const query = useQuery();
    const search = query.get("search");

    useEffect(()=>{
        setSearchText(search || "");
    }, [search])

    const onHandleSubmit = (e) => {
        e.preventDefault();
        history.push('/?search=' + searchText); // Aqui le concatenamos un parametro de busqueda a nuestra ruta obtenido con history
    }

    return (
        <form  className={styles.searchContainer} onSubmit={onHandleSubmit}>
            <div className={styles.searchBox}>
                <input className={styles.searchInput} 
                    type="text" 
                    value={searchText} 
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className={styles.searchButton} type="submit">
                    <BiSearchAlt size={30}/>
                </button>
            </div>
        </form>
    )
}
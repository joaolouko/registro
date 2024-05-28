import { useState } from "react";
import Usuario from "../Usuario"
import styles from './ListaUsers.module.css'
import { useEffect } from "react";
import axios from "axios";
import Nav from "../layout/Nav";

function ListaUsers() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/data');
                setData(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (cod) => {
        try {
            await axios.delete(`http://localhost:5000/api/data/${cod}`);
            setData(data.filter(item => item.cod !== cod));
        } catch (error) {
            console.error('Erro ao excluir dados:', error)
        }
    }

    return (

        <>
            <div className={styles.container}>
                <div className={styles.containerLista}>
                    <ul className={styles.lista}>
                        {data && data.map((item, index) => (
                            <Usuario key={index} cod={item.cod} nome={item.nome} idade={item.idade} onDelete={handleDelete} />
                        ))}
                    </ul>
                </div>

                <div className={styles.containerNav}>
                    <Nav />
                </div>

            </div>


        </>
    )
}

export default ListaUsers
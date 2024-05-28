import { useEffect, useState } from 'react';
import styles from './Inicio.module.css';
import axios from 'axios';
import Nav from '../layout/Nav';

function Inicio() {
    const [data, setData] = useState([]);
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/data', {
                nome,
                idade
            });
            setData([...data, response.data]);
            setNome('');
            setIdade('');
            alert(`Usuário ${nome} cadastrado com sucesso`)
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
        
    };



    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerForm}>
                    <form className={styles.form} id='forms' onSubmit={handleSubmit}>
                        <h1>Registro de usuários</h1>

                        <label>Nome:</label>
                        <div>
                            <input
                                type="text"
                                name="nome"
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>

                        <br />
                        <label>Idade:</label>
                        <div>
                            <input
                                type="text"
                                name="idade"
                                id="idade"
                                value={idade}
                                onChange={(e) => setIdade(e.target.value)}
                            />
                        </div>

                        <br />
                        <button type="submit">Enviar</button>
                    </form>
                </div>

                <div className={styles.containerNav}>
                    <Nav />
                </div>

            </div>



        </>
    );
}

export default Inicio;

import { useEffect, useState } from 'react';
import styles from './Inicio.module.css';
import axios from 'axios';
import Nav from '../layout/Nav';

function Inicio() {
    const [data, setData] = useState([]);
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [message, setMessage] = useState('');



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
            setMessage(`Usuário ${nome} cadastrado com sucesso`);
            setTimeout(() => setMessage(''), 2000);
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            setMessage('Erro ao enviar dados');
            setTimeout(() => setMessage(''), 2000)
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
                        {message && <p className={styles.msg}>{message}</p>}
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

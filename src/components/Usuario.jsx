
import styles from './Usuario.module.css'

function Usuario({cod, nome, idade, onDelete}) {

    return (
        <>
            
            <div className={styles.container}>
                <h2>usuario</h2>
                <p>Nome: {nome}</p>
                <p>Idade: {idade}</p>
                <button onClick={() => onDelete(cod)}>Excluir</button>
            </div>

        </>
    )
}

export default Usuario

import styles from './Usuario.module.css'

function Usuario({cod, nome, idade, onDelete}) {

    return (
        <>
            
            <div className={styles.container}>
                <h2>{nome}</h2>
                <p>Idade: {idade}</p>
                <button onClick={() => onDelete(cod)}>Excluir</button>
            </div>

        </>
    )
}

export default Usuario
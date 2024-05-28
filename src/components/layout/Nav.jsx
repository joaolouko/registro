import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

function Nav() {
    return (
        <div className={styles.container}>
            <ul className={styles.lista}>
                <li><Link to='/' className={styles.link}>Inicio</Link></li>
                <li><Link to='users' className={styles.link}>Usuarios cadastrados</Link></li>
                <li><Link to='users' className={styles.link}>Usuarios cadastrados</Link></li>
                <li><Link to='users' className={styles.link}>Usuarios cadastrados</Link></li>

            </ul>
        </div>
    )
}

export default Nav
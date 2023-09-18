import styles from './page.module.css';


export default function serviciosLayout({children}) {
    return (
        <div>
            <h1 className={styles.mainTitle}>Nuestros servicios</h1>
            {children}
        </div>
    )
}
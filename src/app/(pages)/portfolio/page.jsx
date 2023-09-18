import Link from 'next/link';
import styles from './page.module.css';

export default function Portfolio () {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Elegi una ruta</h1>
      <div className={styles.items}>
        <Link href="/portfolio/rutas" className={styles.item}>
          <span className={styles.title}>Rutas</span>
        </Link>
        <Link href="/portfolio/recursos" className={styles.item}>
          <span className={styles.title}>Recursos</span>
        </Link>
        <Link href="/portfolio/digitalizate" className={styles.item}>
          <span className={styles.title}>Digitalizate</span>
        </Link>
      </div>
    </div>
  )
}
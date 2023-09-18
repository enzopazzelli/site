import styles from "./page.module.css";
import Image from "next/image";
import Hero from "public/hero.svg";
import Button from "./components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>El mejor lugar para aprender</h1>
        <p className={styles.description}>Alcanzando metas. Lleva tus objetivos al siguiente nivel</p>
        <Button text="Conoc[e tu ruta" url="/portfolio" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}

import Button from "@/app/components/Button/Button";
import Image from "next/image";
import styles from "./page.module.css";
import Team from "public/team.jpeg";

export default function About() {
  return (
    <main className={styles.container}>
      <section className={styles.imgContainer}>
        <Image src={Team} fill={true} alt="" className={styles.img} />
        <article className={styles.imgText}>
          <h1 className={styles.imgTitle}>Texto sobre imagen</h1>
          <h2 className={styles.imgDesc}>
            Un buen texto para acompa;ar el texto anterior
          </h2>
        </article>
      </section>
      <section className={styles.textContainer}>
        <article className={styles.item}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            dicta! Unde aut, alias sit corrupti reprehenderit possimus magni
            atque placeat, ut, autem deleniti nobis praesentium recusandae
            libero eos neque ea dolorum ipsam architecto accusamus commodi
            aliquid.
            <br />
            <br />
            Autem molestias necessitatibus hic velit, sequi, fuga, facere
            tenetur consectetur magni unde est exercitationem!
          </p>
        </article>
        <article className={styles.item}>
          <h1 className={styles.title}>Lorem ipsum dolor sit.</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            exercitationem at totam? Quisquam nobis facilis ut! Natus dolore
            nulla distinctio. Deleniti nulla excepturi alias minus, incidunt
            laboriosam. Fuga, quod dolorem!
            <br />
            Lorem ipsum dolor sit amet consectetur
            <br />
            <br /> adipisicing elit. Odio corporis, libero quia nobis
            <br />
            <br /> consequuntur vitae.
          </p>
          <Button text="Contact" url="/contact" />
        </article>
      </section>
    </main>
  );
}

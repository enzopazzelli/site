import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/app/components/Button/Button";

export const metadata = {
  title: "site. ~ Contacto",
  description: "Pagina de contacto",
};


export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.container}>Mantené contacto con nosotros</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form action="" className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
}

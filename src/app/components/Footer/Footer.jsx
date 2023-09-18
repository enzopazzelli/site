"use client";
import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div>©2023 site. Todos los derechos reservados</div>
      <div className={styles.social}>
          <Image
          src="/ig-logo.png"
          alt="site.ig"
          width={20}
          height={20}
          />
          <Image
          src="/x-logo.png"
          alt="site.x"
          width={20}
          height={20}/>
          <Image
          src="/fb-logo.png"
          alt="site.fb"
          width={20}
          height={20}/>
          <Image
          src="/slack-logo.png"
          alt="site.slack"
          width={20}
          height={20}/>
      </div>
    </footer>
  );
}

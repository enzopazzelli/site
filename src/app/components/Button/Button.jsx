import Link from "next/link";
import styles from "./button.module.css";

export default function Button({ text, url }) {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
}

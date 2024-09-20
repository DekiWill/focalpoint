import Image from "next/image";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        width={150}
        height={33}
        src="images/logo.svg"
        alt="Logo da Focal Point"
      />
      <h1 className={styles.header__title}>Bem-vindo de volta, Marcus</h1>

      <time className={styles.header__date}>
        Segunda, 01 de dezembro de 2025
      </time>
    </header>
  );
}

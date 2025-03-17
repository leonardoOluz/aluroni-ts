import styles from "./Cardapio.module.scss";
import Logo from "@/assets/icons/logo.svg?react";
export default function Cardapio() {
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
    </main>
  );
}

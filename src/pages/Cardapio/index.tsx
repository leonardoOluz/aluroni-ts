import { useState } from "react";
import Buscador from "./Buscador";
import styles from "./Cardapio.module.scss";
import Logo from "@/assets/icons/logo.svg?react";
export default function Cardapio() {
  const [busca, setBusca] = useState<string>("");
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do codigo e da massa.</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca}/>
      </section>
    </main>
  );
}

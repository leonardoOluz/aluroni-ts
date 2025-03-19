import { useState } from "react";
import Buscador from "./Buscador";
import styles from "./Cardapio.module.scss";
import Logo from "@/assets/icons/logo.svg?react";
import Filtros from "./Filtros";
import Ordenador from "./Ordenador";
export default function Cardapio() {
  const [busca, setBusca] = useState<string>("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState<string>("");

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
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
        </div>
      </section>
    </main>
  );
}

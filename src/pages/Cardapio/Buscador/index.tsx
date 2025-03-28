import React from "react";
import styles from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg";
interface IPropsBuscador {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}
export default function Buscador({ busca, setBusca }: IPropsBuscador) {
  return (
    <div className={styles.buscador}>
      <input
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4c4d5e" />
    </div>
  );
}

import { useEffect, useState } from "react";
import Item from "./Item";
import itens from "./itens.json";
import styles from "./Itens.module.scss";

interface IProps {
  busca: string;
  filtro: number | null;
  ordenador: string;
}
export default function Itens(props: IProps) {
  const [lista, setLista] = useState(itens);
  const { busca, filtro, ordenador } = props;

  const checarBusca = (title: string) => {
    const regex = new RegExp(busca, "i");
    console.log(regex.test(title));
    return regex.test(title);
  };

  const checarFiltro = (id: number) => {
    if (filtro !== null) return filtro === id;
    return true;
  };

  const ordenarPropriedadeCrescente = (
    lista: typeof itens,
    propriedade: keyof Pick<typeof itens[0], 'size' | 'serving' | 'price'>
  ) => {
    return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
  };

  const ordenarLista = (novaLista: typeof itens) => {
    switch (ordenador) {
      case "porcao":
        return ordenarPropriedadeCrescente(novaLista, "size");
      case "qtd_pessoas":
        return ordenarPropriedadeCrescente(novaLista, "serving");
      case "preco":
        return ordenarPropriedadeCrescente(novaLista, "price");
      default:
        return novaLista;
    }
  };

  useEffect(() => {
    console.log(ordenador);
    const novaLista = itens.filter(
      (item) => checarBusca(item.title) && checarFiltro(item.category.id)
    );
    setLista(ordenarLista(novaLista));
  }, [busca, filtro, ordenador]);
  
  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

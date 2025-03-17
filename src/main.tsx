import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import Cardapio from "./pages/Cardapio";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Cardapio />
  </StrictMode>
);

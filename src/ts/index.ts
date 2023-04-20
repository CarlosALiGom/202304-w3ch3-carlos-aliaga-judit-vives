import HeaderComponent from "./components/Header/HeaderComponent.js";
import CardTvShowComponent from "./components/CardTvShow/CardTvShowComponent.js";
import series from "./components/series.js";
import type { SeriesStructure } from "./types/types.js";
import CardListComponent from "./components/CardListComponent/CardListComponent.js";

const appContainer = document.querySelector(".container")!;
new HeaderComponent(appContainer);
new CardListComponent(appContainer);
const cardList = document.querySelector(".series")!;

series.forEach(
  (serie: SeriesStructure) => new CardTvShowComponent(cardList, serie)
);

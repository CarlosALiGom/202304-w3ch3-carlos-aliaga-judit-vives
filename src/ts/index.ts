import HeaderComponent from "./components/Header/HeaderComponent.js";
import MainContentComponent from "./components/MainContent/MainContentComponent.js";
import CardTvShowComponent from "./components/CardTvShow/CardTvShowComponent.js";
import series from "./components/series.js";
import type { SeriesStructure } from "./types/types.js";

const appContainer = document.querySelector(".container")!;
new HeaderComponent(appContainer);
new MainContentComponent(appContainer);
const cardList = document.querySelector(".list")!;

series.forEach(
  (serie: SeriesStructure) => new CardTvShowComponent(cardList, serie)
);

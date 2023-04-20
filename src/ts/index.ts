import HeaderComponent from "./components/Header/HeaderComponent.js";
import CardTvShowComponent from "./components/CardTvShow/CardTvShowComponent.js";
import series from "./components/series.js";
import type { SeriesStructure } from "./types/types";
import CardListComponent from "./components/CardListComponent/CardListComponent.js";
import MainComponent from "./components/MainComponent/MainComponent.js";

const appContainer = document.querySelector(".container")!;
new HeaderComponent(appContainer);
new MainComponent(appContainer);

const mainContainer = document.querySelector(".main-content")!;

new CardListComponent(mainContainer);
const cardList = document.querySelector(".series")!;

series.forEach(
  (serie: SeriesStructure) => new CardTvShowComponent(cardList, serie)
);

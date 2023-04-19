import HeaderComponent from "./components/Header/HeaderComponent.js";
import MainContentComponent from "./components/MainContent/MainContentComponent.js";
import CardTvShowComponent from "./components/CardTvShow/CardTvShowComponent.js";

const appContainer = document.querySelector(".container")!;
new HeaderComponent(appContainer);
new MainContentComponent(appContainer);
new CardTvShowComponent(appContainer);

import HeaderComponent from "./components/Header/HeaderComponent";
import MainContentComponent from "./components/MainContent/MainContentComponent";

const appContainer = document.querySelector(".container")!;
new HeaderComponent(appContainer);
new MainContentComponent(appContainer);

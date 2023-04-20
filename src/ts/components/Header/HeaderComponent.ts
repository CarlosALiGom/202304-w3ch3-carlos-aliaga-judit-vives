import type { ComponentStructure } from "../../types/types";
import Component from "../Component/Component.js";

class HeaderComponent extends Component implements ComponentStructure {
  constructor(parentElement: Element) {
    super(parentElement, "header", "main-header");

    this.renderHtml();
  }

  renderHtml() {
    this.element.innerHTML = `<h1 class="main-tittle">My Series</h1>
    <h2 class="main-content__title">Series list</h2>`;
  }
}

export default HeaderComponent;

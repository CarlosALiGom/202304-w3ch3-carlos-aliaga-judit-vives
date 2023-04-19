import type { ComponentStructure } from "../../types/types";
import Component from "../Component/Component";

class HeaderComponent extends Component implements ComponentStructure {
  constructor(parentElement: Element) {
    super(parentElement, "header", "main-header");

    this.renderHtml();
  }

  renderHtml() {
    this.element.innerHTML = `<h1 class="main-tittle">My Series</h1>`;
  }
}

export default HeaderComponent;

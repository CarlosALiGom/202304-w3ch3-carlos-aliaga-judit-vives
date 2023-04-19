import type { ComponentStructure } from "../../types/types";
import Component from "../Component/Component.js";

class MainContentComponent extends Component implements ComponentStructure {
  constructor(parentElement: Element) {
    super(parentElement, "main", "main-content");

    this.renderHtml();
  }

  renderHtml() {
    this.element.innerHTML = `<h2 class="main-content__title">Series list</h2>
      <section class="list">
        <h3 class="list__title">Pending series</h3>
        <span class="list__info">You have 4 series pending to watch</span>
      </section>`;
  }
}

export default MainContentComponent;

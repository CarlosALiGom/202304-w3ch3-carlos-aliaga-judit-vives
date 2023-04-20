import type { ComponentStructure } from "../../types/types";
import Component from "../Component/Component.js";

class CardListComponent extends Component implements ComponentStructure {
  constructor(parentElement: Element) {
    super(parentElement, "section", "list");

    this.renderHtml();
  }

  renderHtml() {
    this.element.innerHTML = `
        <h3 class="list__title">Pending series</h3>
        <span class="list__info">You have 4 series pending to watch</span>
        <ul class="series"></ul>`;
  }
}

export default CardListComponent;

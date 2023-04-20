import { type ComponentStructure } from "../../types/types";
import Component from "../Component/Component";

class MainComponent extends Component implements ComponentStructure {
  constructor(parentElement: Element) {
    super(parentElement, "main", "main-content");

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `<h2 class="main-content__title">Series list</h2>`;
  }
}
export default MainComponent;

import Component from "../Component/Component.js";
import type { SeriesStructure } from "../../types/types";
import DeleteButtonComponent from "../DeleteButtonComponent/DeleteButtonComponent.js";

class CardTvShowComponent extends Component {
  serie;

  constructor(parentElement: Element, serie: SeriesStructure) {
    super(parentElement, "li", "serie");
    this.serie = serie;

    this.renderHtml();
  }

  renderHtml() {
    this.element.innerHTML = `<img class="serie__poster"
        src="${this.serie.poster}"
        alt="${this.serie.name} poster" />
      <h4 class="serie__title">${this.serie.name}</h4>
      <span class="serie__info">${this.serie.creator} ${this.serie.year}</span>
            <ul class="score">
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="1/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="2/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="3/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="4/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="5/5"></i></button>
              </li>
            </ul>`;
    new DeleteButtonComponent(this.element, `button ${this.serie.name}`);
  }
}

export default CardTvShowComponent;

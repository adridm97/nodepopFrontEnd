import DataService from "../services/DataService.js";
import PubSub from "../services/PubSub.js";

export default class AdFormController {
  constructor(element) {
    this.element = element;
    this.attachEventListeners();
  }

  attachEventListeners() {
    this.element.addEventListener("submit", async (event) => {
      event.preventDefault();
      PubSub.publish(PubSub.events.SHOW_LOADING);
      if (this.element.checkValidity()) {
        const data = new FormData(this.element);

        const nombre = data.get("nombre");
        const precio = data.get("precio");
        const estado = data.get("estado");
        const foto = data.get("foto");
        const url = new URLSearchParams(window.location.search);
        const next = url.get("next") || "/";
        try {
          const result = await DataService.createAd(
            nombre,
            precio,
            estado,
            foto
          );
          PubSub.publish(PubSub.events.SHOW_SUCCESS, "Anuncio creado! ");
          this.element.reset();
        } catch (error) {
          PubSub.publish(PubSub.events.SHOW_ERROR, error);
        } finally {
          PubSub.publish(PubSub.events.HIDE_LOADING);
        }
      } else {
        PubSub.publish(
          PubSub.events.SHOW_ERROR,
          "Ha ocurrido un error, los campos precio y nombre no pueden estar vacíos."
        );
        PubSub.publish(PubSub.events.HIDE_LOADING);
      }
    });
  }
}

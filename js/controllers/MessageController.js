import PubSub from "../services/PubSub.js"
import { errorView, successView } from "../views.js"

export default class MessageController {

    constructor(element) {
        this.element = element
        // suscribimos el controlador a los eventos que nos interesa
        PubSub.subscribe(PubSub.events.SHOW_ERROR, error => {
            this.showError(error)
        })

        // nos subscribimos al evento para mostrar mensajes de error
        PubSub.subscribe(PubSub.events.SHOW_SUCCESS, message => {
            this.showSuccess(message)
        })
    }

    attachCloseMessageEventListener() {
        const button = this.element.querySelector('button')
        button.addEventListener('click', () => {
            this.hideError()
        })
    }

    showSuccess(message) {
        this.element.innerHTML = successView(message)
        this.attachCloseMessageEventListener()
    }

    showError(message) {
        this.element.innerHTML = errorView(message)
        this.attachCloseMessageEventListener()
    }

    hideError() {
        // TODO: mejorar esto para no borrar todo el HTML y mejor ocultarlo
        this.element.innerHTML = ''
    }
}

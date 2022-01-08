import PubSub from "../services/PubSub.js"
import { loaderView } from "../views.js"

export default class LoaderController {

    constructor(element) {
        this.element = element
        PubSub.subscribe(PubSub.events.SHOW_LOADING, () => {
            this.showLoader()
        })
        PubSub.subscribe(PubSub.events.HIDE_LOADING, () => {
            this.hideLoader()
        })
    }

    hideLoader() {
        this.element.style.display = 'none'
    }

    showLoader() {
        this.element.innerHTML = loaderView()

        this.element.style.display = 'initial'
    }

}
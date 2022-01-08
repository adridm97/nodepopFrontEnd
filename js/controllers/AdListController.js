import { adView } from '../views.js'
import DataService from '../services/DataService.js'
import PubSub from "../services/PubSub.js"

export default class AdListController {

    constructor(element, errorMessageController) {
        this.element = element
        this.errorMessageController = errorMessageController
    }

    async renderAds() {
        PubSub.publish(PubSub.events.SHOW_LOADING)

        try {
            const ads = await DataService.getAds()
            for (const ad of ads) {
                const adElement = document.createElement('article')
                adElement.innerHTML = adView(ad)
                this.element.appendChild(adElement)
            }
        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        } finally {
            PubSub.publish(PubSub.events.HIDE_LOADING)
        }
    }

}
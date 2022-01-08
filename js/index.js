import ErrorMessageController from './controllers/ErrorMessageController.js'
import AdListController from './controllers/AdListController.js'
import LoaderController from "./controllers/LoaderController.js"


window.addEventListener('DOMContentLoaded', function() {

    const errorDiv = document.querySelector('.error-message')

    const errorMessageController = new ErrorMessageController(errorDiv)

    const loaderDiv = document.querySelector('.loader')
    new LoaderController(loaderDiv)

    const adList = document.querySelector('.ads-list')

    const adListController = new AdListController(adList, errorMessageController)

    adListController.renderAds()

})
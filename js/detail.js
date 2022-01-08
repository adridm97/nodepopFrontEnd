import LoaderController from "./controllers/LoaderController.js"
import MessageController from "./controllers/MessageController.js"
import AdDetailController from "./controllers/AdDetailController.js"

window.addEventListener('DOMContentLoaded', function() {

    const messagesDiv = document.querySelector('.messages')
    new MessageController(messagesDiv)

    const loaderDiv = document.querySelector('.loader')
    new LoaderController(loaderDiv)

    const id = new URLSearchParams(window.location.search).get('id')

    const adDiv = document.querySelector('.ad')
    new AdDetailController(adDiv, id)

})
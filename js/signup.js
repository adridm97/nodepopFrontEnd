import SignupController from "./controllers/SignupController.js"
import MessageController from "./controllers/MessageController.js"
import LoaderController from "./controllers/LoaderController.js"

window.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form')

    new SignupController(form)
    const loaderDiv = document.querySelector('.loader')
    new LoaderController(loaderDiv)


    const messages = document.querySelector('.error-message')

    new MessageController(messages)

})
import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"

export default class SignupController {

    constructor(element) {
        this.element = element
        this.attachEventListeners()

    }

    checkIfAllPasswordsAreEqual() {
        const inputsPassword = this.element.querySelectorAll('input[type="password"]')

        let passwords = []
        for (const input of inputsPassword) {
            if (passwords.includes(input.value) === false) {
                passwords.push(input.value)
            }
        }

        if (passwords.length == 1) {
            for (const input of inputsPassword) {
                input.setCustomValidity('')
            }
        } else {
            for (const input of inputsPassword) {
                input.setCustomValidity('Las contraseñas no coinciden')
            }
        }

    }

    attachEventListeners() {

        this.element.addEventListener('submit', async function(event) {

            event.preventDefault()

            if (this.checkValidity()) {
                PubSub.publish(PubSub.events.SHOW_LOADING)

                try {
                    const data = new FormData(this)
                    const username = data.get('username')
                    const password = data.get('password')
                    const result = await DataService.registerUser(username, password)
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Registrado correctamente')
                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                } finally {
                    PubSub.publish(PubSub.events.HIDE_LOADING)

                }
            } else {
                let errorMessage = ''
                for (const element of this.elements) {
                    if (element.validity.valid === false) {
                        errorMessage += `Error en el campo ${element.name}: ${element.validationMessage}. `
                    }
                }
                PubSub.publish(PubSub.events.SHOW_ERROR, errorMessage)
            }

        })

        this.element.querySelectorAll('input[type="password"]').forEach(input => {
            input.addEventListener('input', () => {
                this.checkIfAllPasswordsAreEqual()
            })
        })

        this.element.querySelectorAll('input').forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                if (this.element.checkValidity()) {
                    this.element.querySelector('button').removeAttribute('disabled')
                } else {
                    this.element.querySelector('button').setAttribute('disabled', true)
                }
            })
        })

    }

}
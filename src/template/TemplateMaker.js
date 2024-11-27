import Handlebars from "handlebars"

class TemplateMaker {
    #source
    #data

    constructor (source, dataObj) {
        this.#source = source
        this.#data = dataObj
    }

    template () {
        const template = Handlebars.compile(this.#source)
        return template(this.#data)
    }
}

export default TemplateMaker
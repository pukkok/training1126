import Handlebars from "handlebars"

class Head {
    static source = 
    `
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{{title}}</title>
        <link rel="icon" href="data:,">
    </head>
    `
    #title = { title : 'Document' }

    get title () {
        return this.#title
    }

    set title (value) {
        this.#title.title = value
    }

    template () {
        const template = Handlebars.compile(Head.source)
        return template(this.#title)
    }
}

const headTest = new Head()
const a = headTest.template()
console.log(a)

export default Head
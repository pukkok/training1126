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

const head = {
    source : 
    `
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{{title}}</title>
        <link rel="icon" href="data:,">
    </head>
    `,
    data: {
        title : `핸들바로 제작한 템플릿`
    }
}

const headPart = new TemplateMaker(head.source, head.data)
const headResult = headPart.template()
console.log(headResult)

const HTML = {
    source : 
    `
    <!DOCTYPE html>
    <html lang="ko">
    {{{head}}}
    {{{body}}}
    </html>
    `,
    data: {
        head : headResult,
        body : '안녕'
    }
}
const HtmlPart = new TemplateMaker(HTML.source, HTML.data)
let htmlResult = HtmlPart.template()
console.log(htmlResult)



export default TemplateMaker
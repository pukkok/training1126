import Handlebars from "handlebars"

class HTML {
    static source = 
    `
    <!DOCTYPE html>
    <html lang="ko">
    {{head}}
    {{body}}
    </html>
    `

    build () {
        const template = Handlebars.compile(HTML.source)
        
    }

}

export default HTML
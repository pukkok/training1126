import header from './Body/Header.js'
import main from "./Body/Main.js"
import footer from './Body/Footer.js'
import TemplateMaker from './TemplateMaker.js'

const headerPart = new TemplateMaker(header.source, header.data)
const mainPart = new TemplateMaker(main.source, main.data)
const footerPart = new TemplateMaker(footer.source, footer.data)

const body = {
    source : 
    `
    <body>
    {{{header}}}
    {{{main}}}
    {{{footer}}}
    </body>
    `,
    data : {
        header : headerPart.template(),
        main : mainPart.template(),
        footer : footerPart.template()
    }
}


export default body
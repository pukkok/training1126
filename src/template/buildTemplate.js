import HTML from "./HTML.js"
import TemplateMaker from "./TemplateMaker.js"

const HtmlPart = new TemplateMaker(HTML.source, HTML.data)
// console.log(HtmlPart.template())
const template = HtmlPart.template()
export default template

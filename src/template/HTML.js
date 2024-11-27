import head from "./head.js"
import body from "./body.js"
import TemplateMaker from "./TemplateMaker.js"

const headPart = new TemplateMaker(head.source, head.data)
const bodyPart = new TemplateMaker(body.source, body.data)

const HTML = {
    source :
    `
    <!DOCTYPE html>
    <html lang="ko">
    {{{head}}}
    {{{body}}}
    </html>
    `,
    data : {
        head : headPart.template(),
        body : bodyPart.template()
    }
}

export default HTML

/**
 * @description
 * filePath를 받아서 확장자만 선택한 후
 * 확장자에 따라 contentType을 리턴한다.
 */

class Extender {
    #extender
    constructor(filePath) {
        this.#extender = filePath.split('.').pop()
    }

    static #types = {
        html: 'text/html',
        css: 'text/css',
        json: 'application/json',
        js: 'application/javascript',
        png: 'image/png',
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        gif: 'image/gif',
        svg: 'image/svg+xml',
    }

    get CotentType() {
        return Extender.#types[this.#extender] || 'text/html'
    }
}

export default Extender
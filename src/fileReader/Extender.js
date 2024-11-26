
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

    get CotentType () {
        switch(this.#extender) {
            case 'html' : return 'text/html'
            case 'css' : return 'text/css'
            case 'json' : return 'application/json'
            case 'js' : return 'application/javascript'
            default : return 'text/html'
        }
    }
}

export default Extender
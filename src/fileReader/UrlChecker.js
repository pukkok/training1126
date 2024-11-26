// url을 확인할 수 있다.
// url이 스트링이 아니면 에러를 발생시킨다.
// get으로 url을 확인할 수 있다.
// set으로 url을 변경할 수 있다.


class UrlChecker {
    #url
    constructor(url) {
        if(typeof url === 'string') {
            this.#url = url
        } else {
            console.error('문자열 형식이 아닙니다.')
        }
    }
    
    get url () {
        return this.#url
    }
    
    set url (value) {
        if(typeof value === 'string') {
            this.#url = value
        } else {
            console.error('문자열 형식이 아닙니다.')
        }
    }
}

export default UrlChecker
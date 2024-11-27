class parents {
    static abc = `
    123
    `
    constructor (name) {
        this._name = name
    }
}

class CopyParents extends parents {
    
    tester () {
        console.log(parents.abc)
    }
    get name () {
        console.log(this._name)
    }
}

const copy1 = new CopyParents('에구머니나')
copy1.tester()
copy1.name
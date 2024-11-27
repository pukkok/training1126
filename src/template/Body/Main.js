// #each 와 #with로 구현 가능할까

const main = {
    source : 
    `
    <main>
    {{#each test}}
    <div id="{{this.main}}">
    {{#with this}}
    <h1>{{this.main}}</h1>
    <p>{{this.sub}}</p>
    {{/with}}
    </div>
    {{/each}}
    </main>
    `,
    data : {
        test : [
            {
                main : '김민지',
                sub : '제이쿼리 개발자!'
            },
            {
                main : '서민석',
                sub : '리액트 개발자!'
            },
            {
                main : '공욱재',
                sub : '심리학 개발자!'
            }
        ]
    }
}

export default main
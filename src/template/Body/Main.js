// #each 와 #with로 구현 가능할까

// {{#with content}}
//     <h1>{{main}}</h1>
//     <p>{{sub}}</p>
//     {{/with}}


const main = {
    source : 
    `
    <main>
    <div>
    {{#each test}}
    {{#with this}}
    <h1>{{this.main}}</h1>
    <p>{{this.sub}}</p>
    {{/with}}
    {{/each}}
    </div>
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
        ],
        // test : {
        //     mainContent : ['김민지', '서민석', '공욱재'],
        //     description : ['제이쿼리 개발자!', '리액트 개발자!', '심리학 개발자!']
        // }
    }
}

export default main
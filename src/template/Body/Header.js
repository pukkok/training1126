const header = {
    source : 
    `
    <header>
    <ul>
    <li><a id="get-test" href=api/test-data>요청확인</a></li>
    {{#each item}}
    <li><a href=#{{this}}>{{this}}</a></li>
    {{/each}}
    </ul>
    </header>
    `,
    data : {
        item : ['김민지', '서민석', '공욱재']
    }
}

export default header
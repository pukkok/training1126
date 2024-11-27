const header = {
    source : 
    `
    <header>
    <ul>
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
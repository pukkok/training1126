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
        item : ['민지', '민석', '욱재']
    }
}

export default header
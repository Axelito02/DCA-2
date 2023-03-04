class Nav extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles/nav.css">
        <p>component nav</p>`
    }
}

customElements.define('comp-nav', Nav)

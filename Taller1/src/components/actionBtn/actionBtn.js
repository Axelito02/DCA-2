class Btns extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
        <p>component btns</p>`
    }
}

customElements.define('comp-btns', Btns)

class Character extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/characters/characters.css">
        <p>component character</p>`
    }
}

customElements.define('comp-character', Character)

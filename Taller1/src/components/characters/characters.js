class Character extends HTMLElement {
    static get observedAttributes() {
        return ["img", "msg"];
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles/character.css">
            <div class="characters">
                <img src= "${this.img}" alt= "${this.msg}">
            </div>
    `
    }
}

customElements.define('comp-character', Character)

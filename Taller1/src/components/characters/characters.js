class CharacterContainer extends HTMLElement {
    static get observedAttributes(){
        return("img")
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();

    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCalllback(){
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML= `todos aqui
        <div>
            <p>prueba</p>
        </div>
        `;
    }

}

customElements.define("character-container", CharacterContainer);
export default CharacterContainer;

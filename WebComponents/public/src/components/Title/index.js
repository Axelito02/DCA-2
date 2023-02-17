class AppTitle extends HTMLElement {
    static get observedAttributes() {
        return("meesage")
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this.propName = newValue;
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'}) 
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `Titulo: ${this.message}`
    }
}

customElements.define("app-title", AppTitle);
export default AppTitle;

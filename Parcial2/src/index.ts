import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('div');
        const Jokes2 = this.ownerDocument.createElement('app-card');
        
        something.appendChild(Jokes2);
        this.shadowRoot?.appendChild(something);

    }
}

customElements.define('app-container', AppContainer);

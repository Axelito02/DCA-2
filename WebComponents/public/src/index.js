class AppaContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'}) 
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `<app-title></app-title>`;
    }
}

customElements.define("app-container", AppaContainer)

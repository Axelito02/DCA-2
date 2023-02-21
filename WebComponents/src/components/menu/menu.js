class MenuContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = ``
    }
}

customElements.define('BannerContainer-container', MenuContainer);

import * as character from "./components/importer.js"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCalllback(){
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML= `<character-container></character-container>`;
    }

}

customElements.define("app-container", AppContainer);

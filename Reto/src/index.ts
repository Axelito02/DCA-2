import "./card/card"

class App extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
        }
        render(){
        
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="../src/components/card/style.css">
                <comp-card></comp-card>
                `;
            }
        }
    }

customElements.define('comp-app', App);

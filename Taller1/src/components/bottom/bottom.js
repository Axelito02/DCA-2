class Bottom extends HTMLElement {
    static get observedAttributes() {
        return ["twiter", 'email'];
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
        <link rel="stylesheet" href="./styles/bottom.css">
        <link rel="stylesheet" href="../dist/styles/clases/class.css">
        
        <div class= "body">
            <div class= "bottom">
                <div class="colunm">
                    <p>Phoenix Wright: Ace Attorney And All Respective Names are Trademark & © of Capcom.<br>
                    objection.lol is not associated with Capcom.</p>
                </div>

                <div class="social">
                    <div class="column">
                        <img src= "${this.email}" alt= "${this.msg}">
                    </div>
                    <div class="column">
                        <img src= "${this.twiter}" alt= "${this.msg}">
                     </div>
                </div>
            </div>
        </div>
        <div class="descripcion">2023 -objection.lol</div>
        
        `
    }
}

customElements.define('comp-bottom', Bottom);

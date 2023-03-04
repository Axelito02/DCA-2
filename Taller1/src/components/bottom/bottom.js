class Bottom extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles/bottom.css">
        <div class="body">
            <div class="bottom">
                <p>Phoenix Wright: Ace Attorney And All Respective Names are Trademark & © of Capcom.<br>
                objection.lol is not associated with Capcom.</p>
                
                <h3>mail</h3> 
                <h3>twitter</h3> 
            </div>
        </div>`
    }
}

customElements.define('comp-bottom', Bottom)
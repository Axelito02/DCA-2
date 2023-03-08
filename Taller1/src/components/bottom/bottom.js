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
        <link rel="stylesheet" href="../dist/styles/clases/class.css">
        
        <div class= "body">
            <div class= "bottom">
                <div class="colunm">
                    <p>Phoenix Wright: Ace Attorney And All Respective Names are Trademark & © of Capcom.<br>
                    objection.lol is not associated with Capcom.</p>
                </div>

                <div class="social">
                    <div class="column">
                        <h3>mail</h3> 
                    </div>
                    <div class="column">
                        <h3>twitter</h3> 
                    </div>
                </div>
            </div>
        </div>`
    }
}

customElements.define('comp-bottom', Bottom);

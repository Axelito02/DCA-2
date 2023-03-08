class Nav extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles/nav.css">
        <link rel="stylesheet" href="../dist/styles/clases/class.css">
        <div class="body">
            <div class="header">
                <div class= "colunm">
                    <p>objection.lol</p>
                </div>

                <div class= "colunm">
                    <h3>SIMPLE OBJECTION</h3>
                </div>

                <div class= "colunm">
                    <h3>COURTROOM</h3>
                </div>

                <div class= "colunm">
                    <h3>OBJECTION MAKER</h3>
                </div>

                <div class="colunm">
                    <img src="./objection-characters/sol.png" alt="sol">
                </div>
                
                <div class= "colunm">
                    <h3>KAZURA</h3>
                </div>
            </div>
        </div>`
    }
}

customElements.define('comp-nav', Nav)

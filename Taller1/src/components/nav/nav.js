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
        <div class="body">
            <div class="header">
                <p>objection.lol</p><h3>SIMPLE OBJECTION</h3>
                <h3>OBJECTION MAKER</h3><h3>COURTROOM</h3>
                <div class="sol">
                    <img src="./objection-characters/sol.png" alt="sol">
                </div>
                <h3>KAZURA</h3>
            </div>
        </div>`
    }
}

customElements.define('comp-nav', Nav)

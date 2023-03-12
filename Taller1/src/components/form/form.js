class Form extends HTMLElement {
    static get observedAttributes() {
        return ["message"];
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
        <link rel="stylesheet" href="./styles/form.css">
        <link rel="stylesheet" href="../dist/styles/clases/class.css">
        
        <div class= "form-content">
            <div class= "selects">
                <div class="column1">
                    <label for="Bubble-type">Buble type</label>
                    <select id="Bubble-type">
                        <option>None</option>
                        <option selected>Objection!</option>
                        <option>Hold It!</option>
                        <option>Take That!</option>
                    </select>
                </div>

                <div class= "column1">
                    <label for="Pose">Pose</label>
                    <select id="Pose">
                        <option selected>Breakdown</option>
                        <option>Coffee Stained</option>
                        <option>Confident</option>
                        <option>Cornered</option>
                        <option>Damage</option>
                        <option>Desk Slam</option>
                        <option>Hair Stained</option>
                        <option>Headshake</option>
                        <option>Nod</option>
                        <option>Point</option>
                        <option>Silly</option>
                        <option>Sip Mug</option>
                        <option>Stand</option>
                        <option>Super Objection</option>
                        <option>Thinking</option>
                        <option>Yell</option>
                    </select>
                </div>
            </div>
            
            <div class= "tex-area">
                <textarea class= "input-text" placeholder= "Enter your objection..."></textarea>
            </div>
        </div>
        `
    }
}

customElements.define('comp-form', Form)

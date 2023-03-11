class Btns extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles/actionBtn.css">
        <div class= "content">
            <div class= "switch-btn">
                <div class="switch">
                    <input type="checkbox">Music</input>
                </div>
                <div class="switch">
                    <input type="checkbox">Pose Animation</input>
                </div>
            </div>
            <div class= "switch-btn">
                <div class="switch">
                    <button class="btn-1">Preview</buttonPreview>
                </div>
                <div class="switch">
                    <button class="btn-2">OBJECTION!</button>
                </div>
            </div>
        </div>    
        `
    }
}

customElements.define('comp-btns', Btns);

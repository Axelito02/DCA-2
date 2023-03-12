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
        <link rel="stylesheet" href="../dist/styles/clases/class.css">


        <div class= "content">
            <div class= "switch-btn1">
                <div class="switch">
                    <label for="toggle1" class="label-toggle"></label>
                    <input type="checkbox" id="toggle1">Music</input>
                </div>
                <div class="switch">
                    <label for="toggle2" class="label-toggle"></label>
                    <input type="checkbox" id="toggle2">Pose Animation</input>
                </div>
            </div>
            <div class= "switch-btn">
                <div class="btn">
                    <button class="btn-1">Preview</buttonPreview>
                </div>
                <div class="btn">
                    <button class="btn-2">OBJECTION!</button>
                </div>
            </div>
        </div>    
        `
    }
}

customElements.define('comp-btns', Btns);

import './components/index.js'

class App extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
        
            <comp-nav></comp-nav>
            <comp-character></comp-character>
            <comp-btns></comp-btns>
            <comp-form></comp-form>
            <comp-bottom></comp-bottom>
        `
    }
}

customElements.define('comp-app', App);

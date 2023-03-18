import "./componentes/export"
class App extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render()
    }
    
    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML= `<p>componente padre</p>
        <comp-card><comp-card>
        
        `
    }
}

customElements.define('comp-app', App);
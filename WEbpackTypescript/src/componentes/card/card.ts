class Card extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render()
    }
    
    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML= `<p>desde Card</p>`
    }
}

customElements.define('comp-card', Card);
export default Card;

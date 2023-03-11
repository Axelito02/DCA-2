class Duracion extends HTMLElement {
    static get observedAttributes(){
        return []
    }

    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
        const btn = this.shadowRoot.querySelector('button');
        btn.addEventListener('click', () =>{
            console.log('funciona');
        })
    }

    attributesChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
        <div>
            Duracion
            <button>Reservar</button>
        </div>
        `
    }
}

customElements.define('durac-comp', Duracion);

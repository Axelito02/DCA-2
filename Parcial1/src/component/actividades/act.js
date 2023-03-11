class Actividad extends HTMLElement {
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
            Actividad
            <button>Reservar</button>
        </div>
        `
    }
}

customElements.define('act-comp', Actividad);

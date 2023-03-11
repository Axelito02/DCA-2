import "./component/index.js"
import data from "../data.js"

class Appcontainer extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
        data.forEach(dates =>{
            console.log(dates);
        })
    }

    render(){
        this.shadowRoot.innerHTML = `
        <section>
            <dest-comp></dest-comp>
            <durac-comp></durac-comp>
            <cost-comp></cost-comp>
            <desc-comp></desc-comp>
            <act-comp></act-comp>
            <reserv-comp></reserv-comp>
        </section>
        `
    }
}

customElements.define('app-comp', Appcontainer);

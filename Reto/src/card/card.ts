import {getCharacters} from "../api";
import { character } from "./types/type";

export default class Card extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    async connectedCallback(){
        const charactes = await getCharacters();
        this.render(charactes);
        }

    render(charactes: Array<character>) {
        if(!this.shadowRoot) return; {    
            const dataMorty = charactes.map(({name, image, gender, species, status}) => `
            <link rel="stylesheet" href="../src/style.css">
            <section id= "container">
                <div class="section">
                <img src="${image}">
                </div>
                <div class="section">${name}</div>
                <div class="section">${gender}</div>
                <div class="section">${species}</div>
                <div class="section">${status}</div>
            </section>
            `);

            this.shadowRoot.innerHTML = `
            ${dataMorty.join("")}
        `;     
        }
    }
}

customElements.define('comp-card', Card);

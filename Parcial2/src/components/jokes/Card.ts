import { AttrChunorris } from "../../type/types";
import { getCategories } from "../../api/api";
import styles from "./style.css";

export default class Card extends HTMLElement {
    animal: string = ""
    carrer: string = ""
    celebrity: string = ""
    dev: string = ""
    explicity: string = ""
    fashion: string = ""
    history: string = ""
    money: string = ""
    movie: string = ""
    music: string = ""
    political: string = ""
    religion: string = ""
    science: string = ""
    sport: string = ""
    travel: string = ""

    static get observedAttributes(){
        return ["icon_url", "id", "url", "value"]
    }

    attributeChangedCallback(prop: keyof AttrChunorris, _: unknown, value:string){
        this[prop] = value
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        const DataJokes = await getCategories()
        this.render(DataJokes)
    }

    render(DataJokes: Array<AttrChunorris>) {
        if(this.shadowRoot?.innerHTML) this.shadowRoot.innerHTML = ``;

        const something = this.ownerDocument.createElement('section');
        something.textContent = "contenedor"
        this.shadowRoot?.appendChild(something);

        DataJokes.forEach(({animal, carrer, celebrity, dev, explicity, fashion, history, money, movie,music, political, religion, science, sport, travel})=> {
            const Contjokes = this.ownerDocument.createElement("button")
            Contjokes.setAttribute("animal", `${animal}`)
            Contjokes.setAttribute("carrer", `${carrer}`)
            Contjokes.setAttribute("celebrity", `${celebrity}`)
            Contjokes.setAttribute("dev", `${dev}`)
            Contjokes.setAttribute("explicity", `${explicity}`)
            Contjokes.setAttribute("fashion", `${fashion}`)
            Contjokes.setAttribute("history", `${history}`)
            Contjokes.setAttribute("money", `${money}`)
            Contjokes.setAttribute("movie", `${movie}`)
            Contjokes.setAttribute("music", `${music}`)
            Contjokes.setAttribute("political", `${political}`)
            Contjokes.setAttribute("religion", `${religion}`)
            Contjokes.setAttribute("science", `${science}`)
            Contjokes.setAttribute("sport", `${sport}`)
            Contjokes.setAttribute("travel", `${travel}`)
        
            something.appendChild(Contjokes)
        })

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css)

        const jokes = this.ownerDocument.createElement('div');
        jokes.textContent = "hola"
        this.shadowRoot?.appendChild(jokes);
    }
}

customElements.define('app-card', Card);

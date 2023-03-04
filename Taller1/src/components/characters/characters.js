class Character extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles/character.css">
        <div class="body">
        <div class="cuadro-personajes">
            <div class="Phoenix-Edgeworth-Mia">
                <img src="./objection-characters/Phoenix.jpeg" alt="Phoenix Wright">
                <img src="./objection-characters/Edgeworth1.jpeg" alt="Miles Edgeworth">
                <img src="./objection-characters/Edgeworth2.jpeg" alt="Young Miles Edgeworth">
                <img src="./objection-characters/Mia.jpeg" alt="Mia Fey">
            </div>
            <div class="Coffee-Karma">
                <img src="./objection-characters/Oldkarma.jpeg" alt="Manfred Vonkarma">
                <img src="./objection-characters/Coffee.jpeg" alt="Cafe">
                <img src="./objection-characters/Vonkarma.jpeg" alt="Franziska Vonkarma">
                <img src="./objection-characters/BadCoffee.jpeg" alt="Cafe malvao">
            </div>
            <div class="Payne-Apollo-Klavin-Judge">
                <img src="./objection-characters/Payne.jpeg" alt="Winston Payne">
                <img src="./objection-characters/Apollo.jpeg" alt="Apollo Justice">
                <img src="./objection-characters/Klavin.jpeg" alt="Klavin">
                <img src="./objection-characters/Judge.jpeg" alt="The Judge">
            </div>
            </div>`
    }
}

customElements.define('comp-character', Character)

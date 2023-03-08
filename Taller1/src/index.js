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
        <link rel="stylesheet" href="../dist/stylebg.css">

        <section id ="main-container">
            <comp-nav></comp-nav>
                <div class="data">
                    <div class= "title">
                        Objection!
                    </div>
                    <div class= "text">
                        Select your character and pose, submit your objection then surprise your friends with your irrefutable evidence!
                    </div>
                </div>
                <section id= "content">
                    <div id="cont-character-main">
                        <div id= "cont-character">
                            <comp-character img = "./objection-characters/Phoenix.jpeg" alt="Phoenix Wright"></comp-character>
                            <comp-character img = "./objection-characters/Edgeworth1.jpeg" msg= "Miles Edgeworth"></comp-character>
                            <comp-character img = "./objection-characters/Edgeworth2.jpeg" msg= "Young Miles Edgeworth"></comp-character>
                            <comp-character img = "./objection-characters/Mia.jpeg" msg= "Mia Fey"></comp-character>
                            <comp-character img = "./objection-characters/Coffee.jpeg" msg= "Manfred Vonkarma"></comp-character>
                            <comp-character img = "./objection-characters/Payne.jpeg" msg= "Winston Payne"></comp-character>
                            <comp-character img = "./objection-characters/Vonkarma.jpeg" msg= "Franziska Vonkarma"></comp-character>
                            <comp-character img = "./objection-characters/Oldkarma.jpeg" msg= ""></comp-character>
                            <comp-character img = "./objection-characters/Badcoffee.jpeg" msg= "Cafe malvao"></comp-character>
                            <comp-character img = "./objection-characters/Judge.jpeg" msg= "The Judge"></comp-character>
                            <comp-character img = "./objection-characters/Apollo.jpeg" msg= "Apollo Justice"></comp-character>
                            <comp-character img = "./objection-characters/Klavin.jpeg" msg= ""></comp-character>
                        </div>
                    </div>

                    <div id= "cont-form">
                        <comp-form></comp-form>  
                        <comp-btns></comp-btns>
                    </div>
                </section>
            <comp-bottom></comp-bottom>
        </section>
        `
    }
}

customElements.define('comp-app', App);

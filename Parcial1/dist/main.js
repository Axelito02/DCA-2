(()=>{var e={825:()=>{class e extends HTMLElement{static get observedAttributes(){return[]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.shadowRoot.querySelector("button").addEventListener("click",(()=>{console.log("funciona")}))}attributesChangedCallback(e,t,o){this[e]=o,this.render()}render(){this.shadowRoot.innerHTML="\n        <div>\n            Actividad\n            <button>Reservar</button>\n        </div>\n        "}}customElements.define("act-comp",e)},90:()=>{class e extends HTMLElement{static get observedAttributes(){return[]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.shadowRoot.querySelector("button").addEventListener("click",(()=>{console.log("funciona")}))}attributesChangedCallback(e,t,o){this[e]=o,this.render()}render(){this.shadowRoot.innerHTML="\n        <div>\n            costo\n            <button>Reservar</button>\n        </div>\n        "}}customElements.define("cost-comp",e)},399:()=>{class e extends HTMLElement{static get observedAttributes(){return[]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.shadowRoot.querySelector("button").addEventListener("click",(()=>{console.log("funciona")}))}attributesChangedCallback(e,t,o){this[e]=o,this.render()}render(){this.shadowRoot.innerHTML="\n        <div>\n            descuento\n            <button>Reservar</button>\n        </div>\n        "}}customElements.define("desc-comp",e)},505:()=>{class e extends HTMLElement{static get observedAttributes(){return[]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.shadowRoot.querySelector("button").addEventListener("click",(()=>{console.log("funciona")}))}attributesChangedCallback(e,t,o){this[e]=o,this.render()}render(){this.shadowRoot.innerHTML="\n        <div>\n            destino\n            <button>Reservar</button>\n        </div>\n        "}}customElements.define("dest-comp",e)},599:()=>{class e extends HTMLElement{static get observedAttributes(){return[]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.shadowRoot.querySelector("button").addEventListener("click",(()=>{console.log("funciona")}))}attributesChangedCallback(e,t,o){this[e]=o,this.render()}render(){this.shadowRoot.innerHTML="\n        <div>\n            Duracion\n            <button>Reservar</button>\n        </div>\n        "}}customElements.define("durac-comp",e)},551:()=>{class e extends HTMLElement{static get observedAttributes(){return[]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.shadowRoot.querySelector("button").addEventListener("click",(()=>{console.log("funciona")}))}attributesChangedCallback(e,t,o){this[e]=o,this.render()}render(){this.shadowRoot.innerHTML="\n        <div>\n            Reservacion\n            <button>Reservar</button>\n        </div>\n        "}}customElements.define("reserv-comp",e)}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}(()=>{"use strict";o(505),o(825),o(90),o(399),o(599),o(551);const e=[{destino:"Cartagena",costo:15e5,duracionEnDias:5,descripcion:"Disfruta de las playas y la historia de Cartagena con este paquete turístico",actividades:["Visita a la ciudad amurallada","Paseo en barco por la bahía","Tour gastronómico"]},{destino:"San Andrés",costo:25e5,duracionEnDias:7,descripcion:"Ven a conocer la isla de San Andrés con este plan todo incluido",actividades:["Buceo en el arrecife de coral","Visita al acuario","Recorrido por la isla"]},{destino:"Medellín",costo:1e6,duracionEnDias:4,descripcion:"Descubre la cultura y la naturaleza de Medellín con este tour",actividades:["Visita al Parque Arví","Recorrido por el centro histórico","Paseo en metro-cable"]},{destino:"Santa Marta",costo:18e5,duracionEnDias:6,descripcion:"Explora la costa caribeña de Colombia con este paquete turístico",actividades:["Visita al Parque Tayrona","Paseo en lancha por la bahía","Caminata por la Sierra Nevada"]},{destino:"Eje Cafetero",costo:12e5,duracionEnDias:3,descripcion:"Conoce la cultura cafetera de Colombia con este tour",actividades:["Visita a una finca cafetera","Recorrido por Salento y el Valle de Cocora","Degustación de café"]}];class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),e.forEach((e=>{console.log(e)}))}render(){this.shadowRoot.innerHTML="\n        <section>\n            <dest-comp></dest-comp>\n            <durac-comp></durac-comp>\n            <cost-comp></cost-comp>\n            <desc-comp></desc-comp>\n            <act-comp></act-comp>\n            <reserv-comp></reserv-comp>\n        </section>\n        "}}customElements.define("app-comp",t)})()})();
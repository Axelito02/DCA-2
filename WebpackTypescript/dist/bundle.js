(()=>{"use strict";class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="<p>desde Card</p>")}}customElements.define("comp-card",e);class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="<p>componente padre</p>\n        <comp-card><comp-card>\n        \n        ")}}customElements.define("comp-app",t)})();
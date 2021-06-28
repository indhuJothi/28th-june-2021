let template=document.createElement('template');

template.innerHTML=`<style>h2{color:blue;font-size:30px}</style><h2></h2>`
class  Myproduct extends HTMLElement{
    constructor(){
        super()

        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h2').innerHTML=`Hi,${this.getAttribute('name')}! ${this.getAttribute('query')}`;
        
    }
}
window.customElements.define('my-product',Myproduct);
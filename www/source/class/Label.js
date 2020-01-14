class Label
{
    constructor(label) {
        this.content = label;

        let xmlns = "http://www.w3.org/2000/svg";
        this.element = document.createElementNS(xmlns, 'text');
        this.element.innerHTML = this.content;
        this.element.setAttribute('x', '50%');
        this.element.setAttribute('y', '50%');
        this.element.setAttribute('dominant-baseline', 'middle');
        this.element.setAttribute('text-anchor', 'middle');
        this.element.classList.add('walkingcode-label');
    }

    getElement() {
        return this.element;
    }



}

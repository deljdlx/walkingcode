class Circle extends Figure
{

    elementName = 'circle';

    getElement() {
        const x = this.width / 2 + this.strokeWidth;
        const y = this.height / 2 + this.strokeWidth;
        const r = this.width / 2 - this.strokeWidth;

        this.element.setAttribute('x', x);
        this.element.setAttribute('y', y);
        this.element.setAttribute('r', r);
    }

}

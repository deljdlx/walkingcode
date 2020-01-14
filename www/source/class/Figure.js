class Figure
{
    namespace = "http://www.w3.org/2000/svg";
    width;
    height;

    strokeWidth = 1;

    elementName;

    label;
    element;
    container;

    constructor(width, height, label = '') {

        this.width = width;
        this.height = height;

        this.label = new Label(label);
        this.container = new Container(this);

        if(this.elementName) {
            this.element = document.createElementNS(this.namespace, this.elementName);
        }
    }

    getFigure() {

    }





}
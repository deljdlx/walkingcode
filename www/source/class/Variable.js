class Variable {
    constructor(name, value, type) {
        this.type = type;
        this.name = name;
        this.value = value;

        this.element = document.createElement('div');
        this.element.className = 'variable';
        this.element.setAttribute('id', 'variable-' + this.name);

        this.element.innerHTML = `
            <label>` + this.name + `</label><input/>
        `;
        this.input = this.element.querySelector('input');

        if(this.value !== null) {
            this.input.value = value;
        }
    }

    getElement() {
        return this.element;
    }

    set(value) {
        this.value = value;
        this.input.value = this.value;
    }

    get(value) {
        return this.value;

    }

    inc() {
        this.value++;
        this.input.value = this.value;
    }

    highlight() {
        this.element.classList.add('highlight');
        setTimeout(() => {
            this.element.classList.remove('highlight');
        }, 1000)
    }

}
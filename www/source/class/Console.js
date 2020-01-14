class Console
{
    constructor() {
        this.element = document.getElementById('console')
    }

    log(content) {
        let div = document.createElement('div');
        div.className = 'console-log console-entry';
        div.innerHTML = content;
        this.element.appendChild(div);
        this.updateScroll();
    }

    comment(content) {
        let div = document.createElement('div');
        div.className = 'console-comment console-entry';
        div.innerHTML = content;
        this.element.appendChild(div);
        this.updateScroll();
    }

    divide() {
        let div = document.createElement('div');
        div.className = 'console-division console-entry';
        this.element.appendChild(div);
        this.updateScroll();
    }

    updateScroll(){
        this.element.scrollTop = this.element.scrollHeight;
    }

}
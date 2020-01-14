class Console
{
    constructor() {
        this.element = document.getElementById('console')
    }


    description(content, timeout) {
        this.write(content, 'description', timeout);
    }

    log(content, timeout) {
        this.write(content, 'log', timeout);
    }

    question(content, timeout) {
        this.write(content, 'question', timeout);
    }

    answer(content, timeout) {
        this.write(content, 'answer', timeout);
    }

    comment(content, timeout) {
        this.write(content, 'comment', timeout);
    }

    warning(content, timeout) {
        this.write(content, 'warning', timeout);
    }
    success(content, timeout) {
        this.write(content, 'success', timeout);
    }


    out(content, timeout) {
        this.write(content, 'out', timeout);
    }


    divide(timeout) {

        this.write('', 'division', timeout);
    }

    write(content, css, timeout) {
        let div = document.createElement('div');
        div.className = 'console-'+css+' console-entry';
        div.innerHTML = ''+content;
        if(timeout) {
            setTimeout(() => {
                this.element.appendChild(div);
                this.updateScroll();
            }, timeout);
        } else {
            this.element.appendChild(div);
            this.updateScroll();
        }
    }


    updateScroll(){
        this.element.scrollTop = this.element.scrollHeight;
    }

}
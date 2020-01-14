class Workspace {
    constructor(selector) {
        this.steps = [];
        this.stepsByName = {};
        this.currentStep = null;
        this.nextStep = null;

        this.variables = {};

        this.currentLine = 0;
        this.content = '';

        this.editor = ace.edit(selector);
        this.editor.setTheme("ace/theme/tomorrow_night");
        this.editor.session.setMode("ace/mode/php");

        this.nextButton = document.getElementById('next-trigger');
        this.nextButton.addEventListener('click', (event) => {
            this.next()
        });

        this.editor.session.selection.on('changeCursor', (event) => {
            //console.log(this.editor.selection.getCursor());
        });

        this.console = new Console();

        this.variableContainer = document.getElementById('variable-container');
    }

    setContent(content) {
        this.content = content;
        this.editor.setValue(this.content);
        this.gotoLine(0);
    }


    //==================================================
    getVariale(name) {
        return this.variables[name];
    }

    set(name, value) {
        if(!this.variables[name]) {
            this.variables[name] = new Variable(name, value);
            this.variableContainer.appendChild(
                this.variables[name].getElement()
            );
        }
        this.variables[name].set(value);
    }

    get(name) {
        return this.variables[name].get();
    }

    inc(name) {
        this.variables[name].inc();
    }

    //==================================================



    log(content) {
        this.console.log(content);
    }




    addStep(callback, name) {
        let step = new Step(callback, name);
        this.steps.push(step);
        if (name) {
            this.stepsByName[name] = this.steps.length - 1;
        }
        return step;
    }

    gotoStep(name) {
        this.currentStep = this.stepsByName[name];
        this.executeStep(this.currentStep);
    }

    setNextStep(name) {
        this.nextStep = name;
    }

    next() {
        if(this.nextStep) {
            this.gotoStep(this.nextStep);
            this.nextStep = null;
            return;
        }
        if (this.currentStep === null) {
            this.currentStep = 0;
        } else {
            this.currentStep++
        }
        if (this.currentStep < this.steps.length) {
            this.executeStep(this.currentStep);
        }
    }

    executeStep(index) {
        this.steps[index].execute(this);
    }
    //==================================================

    gotoLine(line) {
        this.currentLine = line;
        this.editor.gotoLine(this.currentLine);
    }


}
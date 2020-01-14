class Step
{
    constructor(callback, name) {
        this.name = name;
        this.callback = callback;
    }

    execute(workspace) {
        this.callback(workspace);
    }

}
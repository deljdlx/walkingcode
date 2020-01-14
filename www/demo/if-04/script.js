workspace.set('$someone', null);


workspace.addStep(function (workspace) {
    workspace.gotoLine(0);
    workspace.console.comment('Début du script');
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(3);
    workspace.set('$someone', 'John');
    workspace.getVariable('$someone').highlight();
    workspace.console.comment('Initialisation de la variable $someone avec la valeur "John"');
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(5);
    workspace.console.question('Est ce que $someone est différent (!==) de la valeur "John" ?');
});

workspace.addStep(function (workspace) {
    workspace.console.answer('$someone vaut "John"');
    workspace.getVariable('$someone').highlight();
    workspace.console.log('Nous pouvons entrer dans le bloc');
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(6);
    workspace.console.out('Vous savez peut être certaines choses...');

});

workspace.addStep(function (workspace) {
    workspace.gotoLine(8);
    workspace.console.log('Pas besoin de rentrer dans le else ; la première condition a été satisfaite');
    workspace.console.divide();
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(12);
    workspace.console.comment('Fin du script');
});


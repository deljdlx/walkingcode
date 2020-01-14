workspace.set('$someone', null);
workspace.set('$age', null);



workspace.addStep(function (workspace) {
    workspace.gotoLine(0);
    workspace.console.comment('Début du script');
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(5);
    workspace.set('$someone', 'John');
    workspace.getVariable('$someone').highlight();
    workspace.console.comment('Initialisation de la variable $someone avec la valeur "John" (quel est le type ?)');
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(6);
    workspace.set('$age', 15);
    workspace.getVariable('$age').highlight();
    workspace.console.comment('Initialisation de la variable $age à la valeur 15');
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(8);

    workspace.console.question('Est ce que $age >= 18 (supérieur ou égal à 18) ?');
    workspace.console.answer('$age vaut 15', 500);
    workspace.console.warning('la condition n\'est pas respectée, on ne rentre  pas dans le bloc', 1000);
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(11);
    workspace.console.comment('Rentrons dans le bloc d\'alternative (else/sinon) ');
    workspace.console.divide();
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(12);
    workspace.console.out(
        workspace.get('$someone') + ' est mineur'
    );
});


workspace.addStep(function (workspace) {
    workspace.gotoLine(18);
    workspace.console.comment('Fin du script');
});











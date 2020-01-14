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

    workspace.console.question('Est ce que $age < 0 (strictement inférieur à 0) ?');
    workspace.console.answer('$age vaut 15', 500);
    workspace.console.warning('la condition n\'est pas respectée, on ne rentre  pas dans le bloc', 1000);
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(11);
    workspace.console.question('Sinon,  est ce que $age < 18 (strictement inférieur à 18) ?');
    workspace.console.answer('$age vaut 15', 500);
    workspace.console.success('la condition est respectée ; Rentrons dans le bloc d\'alternative (else if)', 1000);

    workspace.console.divide();
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(12);
    workspace.console.out(
        workspace.get('$someone') + ' est mineur'
    );
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(13);
    workspace.console.comment('Fin du bloc. Nous n\'avons pas besoin de rentrer dans le "else" final puisqu\'une condition a déjà été satisfaite');
});



workspace.addStep(function (workspace) {
    workspace.gotoLine(19);
    workspace.console.comment('Fin du script');
});











workspace.set('$i', null);

workspace.addStep(function (workspace) {
    workspace.gotoLine(0);
    workspace.console.comment('Début du script');
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(3);
    workspace.set('$i', 0);
    workspace.getVariable('$i').highlight();
    workspace.console.comment("Initialisons la valeur de $i à 0");
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(4);
    workspace.console.question("Est ce que $i < 5 ?");

    workspace.console.answer("$i vaut : " + workspace.get('$i'), 500);

    if (workspace.get('$i') >= 5) {
        workspace.console.warning("$i ne respecte pas le test, nous ne rentrons pas dans la boucle", 1000);
        workspace.setNextStep('end');
    }
    else {
        workspace.console.answer("Nous pouvons entrer dans la boucle", 1000);
    }
}, 'whileTest');

workspace.addStep(function (workspace) {
    workspace.gotoLine(5);
    workspace.console.log(workspace.get('$i'));
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(6);
    workspace.console.log("<br/>");
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(7);
    workspace.inc('$i');
    workspace.getVariable('$i').highlight();
    workspace.console.comment("Incrémentons $i de 1");
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(8);
    workspace.console.comment("Retournons au début de la boucle");
    workspace.console.divide();
});


workspace.addStep(function (workspace) {
    workspace.gotoStep('whileTest');
}, 'endWhile');

workspace.addStep(function (workspace) {
    workspace.gotoLine(10);
    workspace.console.log(
        workspace.get('$i')
    );
}, 'end');

workspace.addStep(function (workspace) {
    workspace.gotoLine(11);
    workspace.console.log('Fin du script');
});

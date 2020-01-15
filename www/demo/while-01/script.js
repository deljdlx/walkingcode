workspace.set('$nombreDePersonnesServie', null);

workspace.addStep(function (workspace) {
    workspace.gotoLine(0);
    workspace.console.comment('Début du script');
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(3);
    workspace.set('$nombreDePersonnesServie', 0);
    workspace.getVariable('$nombreDePersonnesServie').highlight();
    workspace.console.comment("Initialisons la valeur de $nombreDePersonnesServie à 0");
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(4);
    workspace.console.question("Est ce que $nombreDePersonnesServie < 5 ?");

    workspace.console.answer("$nombreDePersonnesServie vaut : " + workspace.get('$nombreDePersonnesServie'), 500);

    if (workspace.get('$nombreDePersonnesServie') >= 5) {
        workspace.console.warning("$nombreDePersonnesServie ne respecte pas le test, nous ne rentrons pas dans la boucle", 1000);
        workspace.setNextStep('end');
    }
    else {
        workspace.console.answer("Nous pouvons entrer dans la boucle", 1000);
    }
}, 'whileTest');

workspace.addStep(function (workspace) {
    workspace.gotoLine(5);
    workspace.console.out('Nombre de personnes servie : ' + workspace.get('$nombreDePersonnesServie'));
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(6);
    workspace.console.log("<br/>");
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(7);
    workspace.inc('$nombreDePersonnesServie');
    workspace.getVariable('$nombreDePersonnesServie').highlight();
    workspace.console.comment("Incrémentons $nombreDePersonnesServie de 1");
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
        workspace.get('$nombreDePersonnesServie')
    );
}, 'end');

workspace.addStep(function (workspace) {
    workspace.gotoLine(11);
    workspace.console.log('Fin du script');
});

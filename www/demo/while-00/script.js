workspace.set('Nombre de personnes servies', null);

workspace.addStep(function (workspace) {
    workspace.gotoLine(0);
    workspace.console.comment('Début du scénario');
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(6);
    workspace.set('Nombre de personnes servies', 0);
    workspace.getVariable('Nombre de personnes servies').highlight();
    workspace.console.comment("Nous n'avons encore servi aucune personne (compteur à zéro)");

});

workspace.addStep(function (workspace) {
    workspace.gotoLine(8);
    workspace.console.divide();
    workspace.console.question("Est ce que nous avons servi moins de 5 personnes ?");

    workspace.console.answer("Nous avons servi : " + workspace.get('Nombre de personnes servies') + ' personnes', 500);

}, 'whileTest');




workspace.addStep(function (workspace) {
    if (workspace.get('Nombre de personnes servies') < 5) {
        workspace.gotoLine(9);
        workspace.console.success("Il reste des personnes à servir");
        workspace.setNextStep('servir');

    }
    else {
        workspace.gotoLine(13);
        workspace.console.warning("Tous le monde a été servi");
        workspace.setNextStep('stop');
    }
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(10);
    workspace.console.log('Servons une personne');
    workspace.setNextStep('inc');
}, 'servir');

workspace.addStep(function (workspace) {
    workspace.gotoLine(11);
    workspace.console.log('Comptons une personne de plus de servie');
    workspace.inc('Nombre de personnes servies');
    workspace.getVariable('Nombre de personnes servies').highlight();
}, 'inc');

workspace.addStep(function (workspace) {
    workspace.gotoLine(12);
    workspace.console.comment('Nous avons terminé de servir une personne, continuons...');
    workspace.setNextStep('whileTest');
});


workspace.addStep(function (workspace) {
    workspace.gotoLine(14);
    workspace.console.comment('Nous pouvons arréter de servir');
    workspace.setNextStep('end');
}, 'stop');

workspace.addStep(function (workspace) {
    workspace.gotoLine(17);
    workspace.console.comment('Il est temps de manger');
    workspace.console.divide();
    workspace.console.comment('Fin du scénario');
}, 'end');





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

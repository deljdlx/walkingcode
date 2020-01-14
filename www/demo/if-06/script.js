workspace.set('$debutHappyHour', null);
workspace.set('$finHappyHour', null);
workspace.set('$heureActuelle', null);
workspace.set('$boisson', null);




workspace.addStep(function (workspace) {
    workspace.gotoLine(0);
    workspace.console.description('Opérateurs "riches" et  conditions impriquées');
    workspace.console.comment('Début du script');
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(7);
    workspace.set('$debutHappyHour', 18);
    workspace.getVariable('$debutHappyHour').highlight();
    workspace.console.comment('Initialisation de la variable $debutHappyHour');
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(8);
    workspace.set('$finHappyHour', 20);
    workspace.getVariable('$finHappyHour').highlight();
    workspace.console.comment('Initialisation de la variable $finHappyHour');
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(10);
    workspace.set('$heureActuelle', 16);
    workspace.getVariable('$heureActuelle').highlight();
    workspace.console.comment('Initialisation de la variable $heureActuelle');
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(11);
    workspace.set('$boisson', 'Bière IPA');
    workspace.getVariable('$boisson').highlight();
    workspace.console.comment('Initialisation de la variable $boisson');
});





workspace.addStep(function (workspace) {
    workspace.gotoLine(13);
    workspace.console.question('Double condition : ');
    workspace.console.question('Est ce que $heureActuelle >=  $debutHappyHour ?');
    workspace.console.question('ET (&&)');
    workspace.console.question('Est ce que $heureActuelle <  $finHappyHour ?');
});

workspace.addStep(function (workspace) {
    workspace.console.success('Oui les deux conditions sont validées');
    workspace.console.success('$heureActuelle > = $debutHappyHour (16 >= 18)');
    workspace.console.success('$heureActuelle < $finHappyHour (16 < 20)');
    workspace.console.answer('Nous pouvons entrer dans le bloc');
    workspace.console.divide();
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(14);
    workspace.console.question('Triple condition : (!!!)');
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(15);
    workspace.console.question("Est ce que $boisson vaut 'Jus de fruits' ?");
    workspace.console.question(' || veut dire "ou" (alt-gr + 6)');
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(16);
    workspace.console.question("Ou est ce que $boisson vaut 'Cocktail' ?");
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(17);
    workspace.console.question("Ou est ce que $boisson vaut 'Bière IPA' ?");
});

workspace.addStep(function (workspace) {
    workspace.console.success("Oui $boisson vaut 'Bière IPA'  ! Nous avons validé l'une des conditions, nous pouvons entrer dans le bloc");
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(19);
    workspace.console.out(
        workspace.get('$boisson') + ' est en happy hour !'
    );
    workspace.console.divide();
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(21);
    workspace.console.comment("Nous n'avons pas besoin d'entrer dans le else (puisque la condition d'avant a été validée)");
    workspace.console.divide();
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(25);
    workspace.console.comment("Nous n'avons pas besoin d'entrer dans le else (le test \"happy hour\" a été validé");
    workspace.console.divide();
});


workspace.addStep(function (workspace) {
    workspace.gotoLine(28);
    workspace.console.comment('Fin du script');
});












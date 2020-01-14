workspace.set('$debutHappyHour', null);
workspace.set('$finHappyHour', null);
workspace.set('$heureActuelle', null);




workspace.addStep(function (workspace) {
    workspace.gotoLine(0);
    workspace.console.comment('Début du script');
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(5);
    workspace.set('$debutHappyHour', 18);
    workspace.getVariable('$debutHappyHour').highlight();
    workspace.console.comment('Initialisation de la variable $debutHappyHour');
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(5);
    workspace.set('$finHappyHour', 20);
    workspace.getVariable('$finHappyHour').highlight();
    workspace.console.comment('Initialisation de la variable $finHappyHour');
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(8);
    workspace.set('$heureActuelle', 16);
    workspace.getVariable('$heureActuelle').highlight();
    workspace.console.comment('Initialisation de la variable $heureActuelle');
});


workspace.addStep(function (workspace) {
    workspace.gotoLine(10);
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
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(11);
    workspace.console.out(
        'Il est '+workspace.get('$heureActuelle') + ', c\'est happy hour !'
    );
});

workspace.addStep(function (workspace) {
    workspace.gotoLine(12);
    workspace.console.comment('La condition a été validée, nous ne rentrons pas dans le bloc "else"');
});



workspace.addStep(function (workspace) {
    workspace.gotoLine(16);
    workspace.console.comment('Fin du script');
});












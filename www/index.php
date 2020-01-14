<?php

use ElBiniou\WalkingCode\Figure\Circle;

require(__DIR__ . '/../__bootstrap.php');
?>
<!doctype html>
<html>
<head>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"/>

    <link rel="stylesheet" href="resource/walkingcode.css"/>

    <style type="text/css" media="screen">

        body {
            font-family: helvetica, verdana, sans-serif;
        }

        #left-panel {
            position: absolute;
            top: 0;
            left: 400px;
            bottom: 0;
            right: 0;
            background-color: #CCC;
            display:flex;
            flex-direction: column;
        }

        #editor {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            font-size: 20px;
            width: 400px;
        }

        #control-container {
            position: absolute;
            bottom: 0px;
            left: 0;
            height: 40px;
            background-color: #0c5460;
            z-index: 20;
            width: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        #control-container .button {
            font-size: 30px;
            display: inline-block;
            color: #FFF;
        }


        .ace-tomorrow-night .ace_marker-layer .ace_active-line {
            background: rgba(0, 0, 0, 0.5);
            border: solid 1px #FFF;
        }

        /*=====================================================*/

        #variable-container {
            display: flex;
            background-color:#CCC;
            padding:8px;
        }

        #variable-container .variable {
            display: inline-block;
            background-color: #AFA;
            padding: 8px 16px;
            border-radius: 16px;
            border: solid 1px #AAA;
            font-size: 20px;
            transition: all 0.5s;
        }

        #variable-container .variable input {
            width: 50px;
            font-size: 20px;
            text-align: center;
        }

        #variable-container .variable.highlight {
            background-color: #FF3;
            font-size: 28px;
        }


        /*=====================================================*/


        #console {
            flex-grow:1;
            background-color:#000;
            overflow: auto;
        }

        .console-entry {
            color: #CCC;
            padding: 2px 8px;
            border-bottom: solid 1px #555;
            font-size: 24px;
        }
        .console-comment {
            font-style: italic;
            color: #080
        }

        .console-division {
            border-bottom: dashed 3px #CCC;
        }

        /*=====================================================*/



    </style>


</head>
<body>


<div id="editor"></div>

<div id="left-panel">


        <div id="variable-container">

        </div>

        <div id="console">

        </div>



</div>

<div id="control-container">
    <i class="fas fa-forward button" id="next-trigger"></i>
</div>


<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id="test"></svg>


<?php
$circle = new Circle(200, 200, 'circle');
echo $circle->render();
?>


<script src="./vendor/ace-builds/src-min/ace.js"></script>
<script src="source/class/WalkginCode.js"></script>
<script src="source/class/Workspace.js"></script>
<script src="source/class/Console.js"></script>
<script src="source/class/Step.js"></script>
<script src="source/class/Variable.js"></script>

<script>


    const workspace = new Workspace('editor');
    let content = <?php echo json_encode(file_get_contents(__DIR__ . '/demo/loop/while.php')); ?>;
    workspace.setContent(content);

    workspace.set('$i', null);

    workspace.addStep(function (workspace) {
        workspace.gotoLine(0);
        workspace.console.comment('Début du script');
    });

    workspace.addStep(function (workspace) {
        workspace.gotoLine(3);
        workspace.set('$i', 0);
        workspace.getVariale('$i').highlight();
        workspace.console.comment("Initialisons la valeur de $i à 0");
    });

    workspace.addStep(function (workspace) {
        workspace.gotoLine(4);
        workspace.console.comment("Est ce que $i <5 ?");

        workspace.console.log("$i vaut : " + workspace.get('$i'));

        if (workspace.get('$i') >= 5) {
            workspace.console.comment("$i ne respecte pas le test, nous ne rentrons pas dans la boucle");
            workspace.setNextStep('end');
        }
        else {
            workspace.console.comment("Nous pouvons entrer dans la boucle");
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
        workspace.getVariale('$i').highlight();
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



</script>


<script src="source/class/Viewport.js"></script>
<script src="source/class/Figure.js"></script>
<script src="source/class/Label.js"></script>
<script src="source/class/Figure/Circle.js"></script>

<script>
    //test = new Figure(100, 100);
    //console.log(test.label);
    //let label = new Label('hello world');
    //document.getElementById('test').appendChild(label.getElement());
</script>

</body>

</html>


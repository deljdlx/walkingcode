<?php

use ElBiniou\WalkingCode\Figure\Circle;

require(__DIR__ . '/../__bootstrap.php');
?>
<!doctype html>
<html>
<head>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"/>

    <link rel="stylesheet" href="resource/walkingcode.css"/>
    <link rel="stylesheet" href="resource/workspace.css"/>
    <link rel="stylesheet" href="resource/console.css"/>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css"/>

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


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js"></script>
<script src="./vendor/ace-builds/src-min/ace.js"></script>



<script src="source/class/WalkginCode.js"></script>
<script src="source/class/Workspace.js"></script>
<script src="source/class/Console.js"></script>
<script src="source/class/Step.js"></script>
<script src="source/class/Variable.js"></script>

<script>




</script>


<script src="source/class/Viewport.js"></script>
<script src="source/class/Figure.js"></script>
<script src="source/class/Label.js"></script>
<script src="source/class/Figure/Circle.js"></script>

<script>


    const workspace = new Workspace('editor');
    <?php
    if(isset($_GET['demo'])) {
        echo "workspace.loadContent('".$_GET['demo']."');";
    }
    ?>


    //workspace.loadContent('while-00');
    //workspace.loadContent('if-00');
    //workspace.loadContent('if-01');
    //workspace.loadContent('if-02');
    //workspace.loadContent('if-03');
    //workspace.loadContent('if-04');
    //workspace.loadContent('if-05');

    //test = new Figure(100, 100);
    //console.log(test.label);
    //let label = new Label('hello world');
    //document.getElementById('test').appendChild(label.getElement());
</script>

</body>

</html>


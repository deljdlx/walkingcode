<?php

namespace ElBiniou\WalkingCode\Figure;


class Circle extends \ElBiniou\WalkingCode\Figure
{


    public function getFigure()
    {

        $x = ($this->width /2) + $this->strokeWidth;
        $y = ($this->height /2) + $this->strokeWidth;
        $r = $this->width / 2 - 2 * $this->strokeWidth;

        return
            '<circle cx="'.$x.'" cy="'.$y.'" r="'.$r.'" '.$this->generateProperties().'/>'."\n".
            $this->label->render()
        ;
    }

}


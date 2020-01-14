<?php

namespace ElBiniou\WalkingCode;


class Container
{
    public $width;
    public $height;

    public function __construct($width, $height)
    {
        $this->width = $width;
        $this->height = $height;
    }



    public function render(Figure $element)
    {
        $buffer = '<svg width="'.$this->width.'" height="'.$this->height.'" viewBox="0 0 '.$this->width.' '.$this->height.'" xmlns="http://www.w3.org/2000/svg">'."\n";
            $buffer .= $element->getFigure()."\n";
        $buffer .= '</svg>'."\n";

        return $buffer;
    }


}


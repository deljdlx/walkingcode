<?php

namespace ElBiniou\WalkingCode;


class Label
{

    public $content = '';

    public function __construct($content)
    {
        $this->content = $content;
    }


    public function render()
    {
        return '<text class=".walkingcode-label" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">'.$this->content.'</text>';
    }


}

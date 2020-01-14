<?php

namespace ElBiniou\WalkingCode;


abstract class Figure
{

    public $width;
    public $height;
    public $strokeWidth = 1;

    public $class = 'walkingcode-figure';

    /**
     * @var Container
     */
    public $container;

    /**
     * @var Label
     */
    public $label;


    public abstract function getFigure();


    public function __construct($width, $height, $label = '')
    {
        $this->width = $width;
        $this->height = $height;

        $this->container = new Container($this->width, $this->height);
        $this->label = new Label($label);
    }


    /**
     * @return Container
     */
    public function getContainer()
    {
        return $this->container;
    }

    public function render()
    {
        return $this->container->render($this);
    }


    public function generateProperties()
    {
        return ' class="'.$this->class.'" stroke-weight="'.$this->strokeWidth.'" ';
    }



}


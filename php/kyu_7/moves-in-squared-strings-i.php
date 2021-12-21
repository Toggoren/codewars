<?php

// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/php

function vertMirror($s)
{
    return join("\n", array_map(function ($word) {
        return join("", array_reverse(str_split($word)));
    }, explode("\n", $s)));
}

function horMirror($s)
{
    return join("\n", array_reverse(explode("\n", $s)));
}

function oper($fct, $s)
{
    return $fct($s);
}

<?php

// https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/php

function calc($s)
{
    $tmp = '';
    foreach (str_split($s) as $c) {
        $tmp .= strval(ord($c));
    }

    $total1 = array_reduce(str_split($tmp), function ($a, $c) {
        return $a + intval($c);
    }, 0);
    $total2 = array_reduce(str_split(str_replace("7", "1", $tmp)), function ($a, $c) {
        return $a + intval($c);
    }, 0);
    return $total1 - $total2;
}

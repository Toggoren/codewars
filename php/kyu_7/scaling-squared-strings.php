<?php

// https://www.codewars.com/kata/56ed20a2c4e5d69155000301/train/php

function scale($s, $k, $n)
{
    $result = '';
    foreach (explode("\n", $s) as $line) {
        $tmp = '';
        foreach (str_split($line) as $c) {
            $tmp .= str_repeat($c, $k);
        }
        $result .= str_repeat($tmp . "\n", $n);
    }
    return rtrim($result);
}

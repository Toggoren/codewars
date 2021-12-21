<?php

// https://www.codewars.com/kata/57f7796697d62fc93d0001b8/train/php

function trouble($x, $t)
{
    $result = [$x[0]];
    for ($i = 1; $i < count($x); $i++) {
        if ($result[count($result) - 1] + $x[$i] !== $t) {
            array_push($result, $x[$i]);
        }
    }
    return $result;
}

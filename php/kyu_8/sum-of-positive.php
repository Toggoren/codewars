<?php

// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/php

function positive_sum(array $arr): float
{
    $result = 0.0;
    foreach ($arr as $number) {
        if ($number >= 0.0) {
            $result += $number;
        }
    }
    return $result;
}

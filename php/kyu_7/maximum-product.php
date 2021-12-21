<?php

// https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/php

function adjacentElementsProduct($array)
{
    $result = [];
    for ($i = 0; $i < count($array) - 1; $i++) {
        array_push($result, $array[$i] * $array[$i + 1]);
    }
    return max($result);
}
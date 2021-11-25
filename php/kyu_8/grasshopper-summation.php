<?php

// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/php

function summation($n) {
    $result = 0;
    for ($i = 1; $i <= $n; $i++) {
        $result += $i;
    }
    return $result;
}

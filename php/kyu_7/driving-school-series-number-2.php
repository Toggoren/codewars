<?php

// https://www.codewars.com/kata/589b1c15081bcbfe6700017a/train/php

function cost($mins)
{
    if (5 < $mins && $mins <= 65) {
        return 30;
    }
    $price = 30;
    $mins -= 60;
    while ($mins > 5) {
        $price += 10;
        $mins -= 30;
    }
    return $price;
}

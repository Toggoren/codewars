<?php

// https://www.codewars.com/kata/57ed30dde7728215300005fa/train/php

function bump($x)
{
    if (substr_count($x, "n") <= 15) {
        return "Woohoo!";
    }
    return "Car Dead";
}

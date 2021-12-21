<?php

// https://www.codewars.com/kata/55e6f5e58f7817808e00002e/train/php


function seven($m)
{
    $count = 0;
    while ($m > 99) {
        $m = intdiv($m, 10) - $m % 10 * 2;
        $count += 1;
    }
    return [$m, $count];
}

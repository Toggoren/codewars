<?php

// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/php

function paperwork(int $n, int $m): int
{
    if ($n > 0 && $m > 0) {
        return $n * $m;
    }
    return 0;
}

<?php

// https://www.codewars.com/kata/567501aec64b81e252000003/train/php

function wallPaper($l, $w, $h)
{
    if ($l == 0 || $w == 0 || $h == 0) {
        return "zero";
    }
    return [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty"
    ][ceil(((($l + $w) * $h) / (10 * 0.52)) * 1.15 * 2)];
}

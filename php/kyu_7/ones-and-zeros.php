<?php

// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/php

function binaryArrayToNumber($arr)
{
    return bindec(join("", $arr));
}

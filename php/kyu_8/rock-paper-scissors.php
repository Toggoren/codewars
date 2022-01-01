<?php

// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/php

function rpc($p1, $p2)
{
    if ($p1 === $p2) {
        return "Draw!";
    }
    $rule = [
        "scissors" => "paper",
        "rock" => "scissors",
        "paper" => "rock",
    ];
    if ($rule[$p1] === $p2) {
        return 'Player 1 won!';
    } else {
        return 'Player 2 won!';
    }
}

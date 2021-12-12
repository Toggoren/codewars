#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python


def high_and_low(numbers):
    min_ = +(2 ** 31 + 1)
    max_ = -(2 ** 31 + 1)
    for n in numbers.split(' '):
        n = int(n)
        min_ = min(n, min_)
        max_ = max(n, max_)
    return f'{max_} {min_}'

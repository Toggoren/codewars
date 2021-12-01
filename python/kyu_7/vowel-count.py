#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python

import functools


def get_count(sentence):
    vowels = ['a', 'e', 'i', 'o', 'u']
    return functools.reduce(lambda a, c: a + sentence.count(c), vowels, 0)

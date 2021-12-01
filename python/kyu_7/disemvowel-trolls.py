#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# https://www.codewars.com/kata/52fba66badcd10859f00097e/train/python


def disemvowel(string_):
    vowels = ['a', 'e', 'i', 'o', 'u']
    for vowel in vowels + [v.upper() for v in vowels]:
        string_ = string_.replace(vowel, '')
    return string_

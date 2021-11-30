#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/python


def how_much_i_love_you(nb_petals):
    phrases = [
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
        'not at all',
    ]
    return phrases[(nb_petals % len(phrases)) - 1]

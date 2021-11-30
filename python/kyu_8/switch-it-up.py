#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/python


def switch_it_up(number):
    return {
        0: 'Zero',
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
    }.get(number)

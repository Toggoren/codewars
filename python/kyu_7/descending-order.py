#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/python


def descending_order(num):
    return int(''.join(reversed(sorted(str(num)))))

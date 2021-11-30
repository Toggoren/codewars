#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/python


def get_real_floor(n):
    if n < -1:
        return n
    if n == 0:
        return 0
    if n < 13:
        return n - 1
    if n >= 13:
        return n - 2

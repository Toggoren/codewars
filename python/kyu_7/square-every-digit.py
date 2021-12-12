#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# https://www.codewars.com/kata/546e2562b03326a88e000020/train/python


def square_digits(num):
    return int(''.join(str(int(d) ** 2) for d in list(str(num))))

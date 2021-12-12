#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/python


def is_square(n):
    return True if n >= 0 and (n ** 0.5).is_integer() else False

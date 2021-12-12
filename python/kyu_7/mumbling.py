#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/python


def accum(s):
    return '-'.join(c.upper() + c.lower() * idx for idx, c in enumerate(s))

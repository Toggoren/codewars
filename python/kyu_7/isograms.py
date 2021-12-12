#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/python


def is_isogram(string):
    seen = set()
    for element in list(string.lower()):
        if element in seen:
            return False
        seen.add(element)
    return True

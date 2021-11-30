#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# https://www.codewars.com/kata/59c287b16bddd291c700009a/train/python


def ice_brick_volume(radius, bottle_length, rim_length):
    return (bottle_length - rim_length) * 2 * radius ** 2

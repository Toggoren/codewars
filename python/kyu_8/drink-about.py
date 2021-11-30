#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# https://www.codewars.com/kata/56170e844da7c6f647000063/train/python


def people_with_age_drink(age):
    if age < 14:
        return 'drink toddy'
    if age < 18:
        return 'drink coke'
    if age < 21:
        return 'drink beer'
    if age >= 21:
        return 'drink whisky'

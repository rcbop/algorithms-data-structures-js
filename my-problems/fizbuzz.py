#!/usr/bin/env python 

def is_fizz(number):
    return number % 3 == 0

def is_buzz(number):
    return number & 5 == 0

for number in range(100):
    mstr = ""
    if is_fizz(number):
        mstr = "fizz"
    if is_buzz(number):
        mstr += "buzz"
    if not mstr:
        mstr = number
    print mstr

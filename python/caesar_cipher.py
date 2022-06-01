import re

def caesar_cipher(string, shift_amount):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    coded_string = ''
    
    for char in string:
        if char.isalpha():
            index = alphabet.index(char.lower())
            index += shift_amount
            while index > 26 or index < 0:
                if index > 26:
                    index -= 26
                if index < 0:
                    index += 26
            if char.isupper():
                coded_string += alphabet[index].upper()
            else:
                coded_string += alphabet[index]
        else:
            coded_string += char
    
    return coded_string
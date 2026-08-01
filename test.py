numbers = [1, 2, 4, 5, 6, 7]
for num in numbers:
    if num % 2 == 0:
        numbers.remove(num)
print(numbers)

import re
name = raw_input("Enter file:")
if len(name) < 1:
    name = "regex_sum_303222.txt"  # name = "regex_sum_42.txt"
handle = open(name)
numbers_sum = 0
for line in handle:
    numbers_list = re.findall('[0-9]+', line)
    if len(numbers_list) >= 1:
        for number in numbers_list:
            numbers_sum = numbers_sum + int(number)
print numbers_sum

hours = raw_input('Enter Hours:?\n')
try:
    float(hours)
except:
    hours = raw_input("Error, please enter numeric value: ")
rate = raw_input('Enter Rate:?\n')
try:
    float(rate)
except:
    rate = raw_input("Error, please enter numeric value: ")
if hours == 40:
    pay = float(hours) * float(rate)
else:
    overHours = float(hours) - 40
    rate2 = float(rate) * 1.5
    pay = (40 * float(rate)) + (overHours * rate2)
print ("Pay equals: ")
print pay

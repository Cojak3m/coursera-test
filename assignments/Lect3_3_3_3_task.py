score = raw_input("Enter Score [0.0 - 1.0]: ")
try:
    score = float(score)
except:
    print ("Error, it is not numeric value")

if (score >= 0.9):
    print("A")
elif (score >= 0.8):
    print("B")
elif (score >= 0.7):
    print("C")
elif (score >= 0.6):
    print("D")
elif (score < 0.6):
    print("F")
else:
    print("Error, value out of scope")
    quit()

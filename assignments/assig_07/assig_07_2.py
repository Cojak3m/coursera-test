# Use the file name mbox-short.txt as the file name
fname = raw_input("Enter file name: ")
count = 0
float_s = 0
try:
    fh = open(fname)
except:
    print "No such file: ", fname
    exit()
for line in fh:
    if not line.startswith("X-DSPAM-Confidence:"):
        continue
    count = count + 1
    line = line.replace("X-DSPAM-Confidence:", "")
    float_s = float_s + float(line)
print "Average spam confidence:", float_s/count

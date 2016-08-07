# Use the file name mbox-short.txt as the file name
fname = raw_input("Enter file name: ")
if len(fname) == 0:
    fname = "mbox-short.txt"
try:
    fh = open(fname)
except:
    print "No such file: ", fname
    exit()
count = 0
float_s = 0
for line in fh:
    if not line.startswith("X-DSPAM-Confidence:"):
        continue
    count = count + 1
    line = line.replace("X-DSPAM-Confidence:", "")
    float_s = float_s + float(line)
print "Average spam confidence:", float_s/count

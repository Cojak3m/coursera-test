# Use words.txt as the file name
fname = raw_input("Enter file name: ")
try:
    fh = open(fname)
except:
    print "No such file: ", fname
    exit()
for line in fh:
    line = line.rstrip()
    line = line.upper()
    print line

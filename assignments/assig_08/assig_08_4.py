fname = raw_input("Enter file name: ")
fh = open(fname)
lst = list()
add_word = ""
for line in fh:
    one_line = line.rstrip().split()
    for word in one_line:
        if lst.count(word) == 0:
            lst.append(word)
lst.sort()
print lst

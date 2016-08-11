name = raw_input("Enter file:")
if len(name) < 1:
    name = "mbox-short.txt"
handle = open(name)
words_db = dict()
for line in handle:
    if not line.startswith('From '):
        continue
    lst = line.split()
    words_db[lst[1]] = words_db.get(lst[1], 0) + 1
maxi = max(words_db.values())
for item in words_db:
    if words_db[item] == maxi:
        print item, words_db[item]

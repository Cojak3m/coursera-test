name = raw_input("Enter file:")
if len(name) < 1:
    name = "mbox-short.txt"
handle = open(name)
time = dict()
for line in handle:
    if not line.startswith('From '):
        continue
    lst = line.split()
    lst_time = lst[5].split(':')
    time[lst_time[0]] = time.get(lst_time[0], 0) + 1
for k, v in sorted(time.items()):
    print k, v

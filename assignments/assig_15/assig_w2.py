import sqlite3

conn = sqlite3.connect('assig_w2_db.sqlite')
cur = conn.cursor()

cur.execute('''
DROP TABLE IF EXISTS Counts''')

cur.execute('''
CREATE TABLE Counts (org TEXT, count INTEGER)''')

fname = raw_input('Enter file name: ')
if (len(fname) < 1):
    fname = 'mbox.txt'
fh = open(fname)
# db = dict()
for line in fh:
    if not line.startswith('From: '):
        continue
    pieces = line.split()
    email = pieces[1].split('@')
    org = email[1]
#    db[email[1]] = db.get(email[1], 0) + 1
# for item in db:
    # print db[item], item
    cur.execute('SELECT count FROM Counts WHERE org = ? ', (org, ))
    row = cur.fetchone()

    if row is None:
        cur.execute('''INSERT INTO Counts (org, count) VALUES ( ?, 1 )''', (org, ))
    else:
        cur.execute('UPDATE Counts SET count=count+1 WHERE org = ?',
                    (org, ))

# This statement commits outstanding changes to disk each
# time through the loop - the program can be made faster
# by moving the commit so it runs only after the loop completes

conn.commit()

# https://www.sqlite.org/lang_select.html
sqlstr = 'SELECT org, count FROM Counts ORDER BY count DESC LIMIT 25'

print
print "Counts:"
for row in cur.execute(sqlstr):
    print str(row[0]), row[1]

cur.close()

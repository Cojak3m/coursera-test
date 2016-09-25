import urllib
import json

# test input = 'http://python-data.dr-chuck.net/comments_42.json'
# assignment input = 'http://python-data.dr-chuck.net/comments_303228.json'

while True:
    address = raw_input('Enter location: ')
    if len(address) < 1:
        break
    data = urllib.urlopen(address).read()
    try:
        js = json.loads(str(data))
    except:
        js = None
    if 'comments' not in js:
        print data
        continue
    suma = 0
    for item in js['comments']:
        suma += item['count']
    print suma

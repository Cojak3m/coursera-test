import urllib
import xml.etree.ElementTree as ET

while True:
    address = raw_input('Enter url: ')
    if len(address) < 1:
        break
#        url = 'http://python-data.dr-chuck.net/comments_42.xml'
    url = address
    print 'Retrieving', url
    uh = urllib.urlopen(url)
    data = uh.read()
    print 'Retrieved', len(data), 'characters'

    tree = ET.fromstring(data)

    results = tree.findall('comments/comment')
    count = 0
    for item in results:
        count = count + int(item.find('count').text)

    print 'Count', len(results)
    print 'Sum', count

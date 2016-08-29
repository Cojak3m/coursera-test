import urllib
from bs4 import *
# from BeautifulSoup import *
# http://python-data.dr-chuck.net/comments_42.html
url = raw_input('Enter - ')
html = urllib.urlopen(url).read()

soup = BeautifulSoup(html, "html.parser")

# Retrieve all of the anchor tags
tags = soup('span')
dict_span = list()
for tag in tags:
    # Look at the parts of a tag
    dict_span.append(int(tag.contents[0]))
print "Count ", len(dict_span)
print "Sum ", sum(dict_span)

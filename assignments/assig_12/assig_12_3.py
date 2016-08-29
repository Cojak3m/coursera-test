import urllib
from bs4 import *
# from BeautifulSoup import *

url = raw_input('Enter - ')
# url = "http://python-data.dr-chuck.net/known_by_Fikret.html"
html = urllib.urlopen(url).read()
soup = BeautifulSoup(html, "html.parser")

# Retrieve all of the anchor tags
tags = soup('a')
name_list = list()
j = 0
# how many times loop is searching for next link
while j < 7:
    i = 0
    for tag in tags:
        # Number of a link to open
        if i == 17:
            name_list.append(str(tag.contents[0]))
            url = tag.get('href', None)
            html = urllib.urlopen(url).read()
            soup = BeautifulSoup(html, "html.parser")
            tags = soup('a')
        i = i + 1
    j = j + 1
print name_list

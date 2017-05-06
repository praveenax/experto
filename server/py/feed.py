#! /usr/bin/python
# -*- coding: utf-8 -*-
#author newdongyuwei@gmail.com

import httplib2
from xml.dom.minidom import parseString

#https://user:password@mail.google.com/mail/feed/atom
gmail_feed_url = "https://mail.google.com/mail/feed/atom"


http = httplib2.Http()
http.add_credentials(user, password)#basic auth
resp, content = http.request(gmail_feed_url , "GET", body={}, headers={} )
print resp,content
dom = parseString(content)
feed_list = dom.getElementsByTagName('entry')
result = []
for feed in feed_list:
    result.append(";".join([feed.getElementsByTagName("title")[0].firstChild.nodeValue.strip(),feed.getElementsByTagName("summary")[0].firstChild.nodeValue.strip(),feed.getElementsByTagName("name")[0].firstChild.nodeValue.strip()]))
    
print result
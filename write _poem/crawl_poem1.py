# -*- coding:utf-8 -*-
import sys
import os
import re
from lxml import etree
from argparse import ArgumentParser

if sys.version_info[0] == 3:
    from urllib.request import urlopen
else:
    # Not Python 3 - today, it is most likely to be Python 2
    # But note that this might need an update when Python 4
    # might be around one day
    from urllib import urlopen

pattern_0 = r'\([^()]*\)'      #depth 0 pattern
pat_left = r'\((?:[^()]|'   
pat_right = r')*\)'
def pattern_generate(pattern, depth=0):
    while(depth):
      pattern = pat_left + pattern + pat_right
      depth -= 1
    return pattern

if __name__ == "__main__":
    pat = pattern_generate(pattern_0, 2)
    reg=re.compile("(?=[，！？。])")
    
    parser = ArgumentParser()
    parser.add_argument('-i',
            dest='start_index', help='start_index',
            metavar='start_index', required=True)    
    options = parser.parse_args()

    if os.path.exists('data') is False:
        os.mkdir('data')
    fp = open("data/poetry"+options.start_index+".txt",'a')

    i = int(options.start_index) #2809
    totalSize = 1500000#3075500
    while i < totalSize:
    	i += 1
    	#percent = int(i*100/totalSize)
    	sys.stdout.write("\r%d" % i + ' complete')
    	sys.stdout.flush()
    	
    	#url = urlopen("http://so.gushiwen.org/view_"+str(i)+".aspx")
    	try:	
    	    url = urlopen("http://www.shicimingju.com/chaxun/list/"+str(i)+".html")
    	except Exception as err:
    		continue
    		
    	html = url.read()
    	selector=etree.HTML(html, parser=None, base_url=None)

    	context=selector.xpath('//*[@id="shicineirong"]/p/text()')
    	if str(context) == '[]':
    	    context=selector.xpath('//*[@id="shicineirong"]/text()')
    	if str(context).find('诗句：') != -1:
    	    continue
    	content=''
    	for each in context:
    	    content+=each
    	content = content.replace('\r','').replace('\n','').replace(' ','')
    	if content != '':
    		poem_length = len(reg.findall(content))
    		if poem_length > 0:
    			i += poem_length -1
    	else:
    		continue
    	#print(content)

    	context=selector.xpath('//*[@class="jjzz"]/a/text()')
    	author=''
    	for each in context:
    	    author+=each+'-'
    	#print(author)	
        
    	context=selector.xpath('//*[@class="zhuti yuanjiao"]/h2/text()')
    	title=''
    	for each in context:
    	    title+=each
    	#print(title)
    	
    	result = author+title+'@'+content
    	result = re.sub(r'\[([0-9]+)\]','',result)
    	result = re.sub(pat, '', result)
    	result = result.replace('\r','').replace('\n','').replace(' ','')+'\n'
    	#print(result)
    	fp.write(result)
    	fp.flush()
    	      	
    fp.close()


import sys  
  
import jieba  
import jieba.analyse  
from optparse import OptionParser  
  
def word_frequency(file_name, topK=10):  
    content = open(file_name, 'rb').read()        
    return jieba.analyse.extract_tags(content, topK, withWeight=True)            

def main():
    print(word_frequency('./talks/20161202',100))
    
main()
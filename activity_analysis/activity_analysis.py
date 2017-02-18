import sys  

import os
import jieba  
import jieba.analyse  
import numpy    #numpy计算包
import codecs   #codecs提供的open方法来指定打开的文件的语言编码，它会在读取的时候自动转换为内部unicode 
import pandas   #数据分析包
import matplotlib.pyplot as plt 
from wordcloud import WordCloud#词云包
from optparse import OptionParser  

talks_root_dir = './activities/'
total_segment=[]
stopwords=[]

def words_stat(segment):
    words_df=pandas.DataFrame({'segment':segment})
    words_df.head()
    words_df=words_df[~words_df.segment.isin(stopwords.stopword)]
    words_stat=words_df.groupby(by=['segment'])['segment'].agg({"计数":numpy.size})
    words_stat=words_stat.reset_index().sort(columns="计数",ascending=False)
    return words_stat

def plot_stat(words_stat, file_name):
    wordcloud=WordCloud(font_path="simhei.ttf",background_color="white")
    wordcloud=wordcloud.fit_words(words_stat.head(1000).itertuples(index=False))
    plt.imshow(wordcloud)
    plt.savefig('./wordclouds/'+ file_name.split("/")[-1].split(".")[0] + '.png', dpi=400)

def word_frequency(file_name):  
    file=codecs.open(file_name,'r')
    content=file.read()
    file.close()
    segment=[]
    segs=jieba.cut(content) #切词
    for seg in segs:
        if len(seg)>1 and seg!='\r\n':
            segment.append(seg)    
            total_segment.append(seg)
    
    plot_stat(words_stat(segment), file_name)                

def main():
    stopwords=pandas.read_csv("stopwords.txt",index_col=False,quoting=3,sep="\t",names=['stopword'],encoding="utf8")
    
    files = os.listdir(talks_root_dir)
    for file in sorted(files):
        file_path = os.path.join(talks_root_dir, file)
        word_frequency(file_path)
    plot_stat(words_stat(total_segment), 'total')
main()
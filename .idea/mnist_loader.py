import numpy as np
import idx2numpy
import csv

""" The idx files for the MNIST dataset can be downloaded at
http://yann.lecun.com/exdb/mnist/.  This python script can
then be used to convert them into two csv files.  The first
containing all 70,000 images (one row per image), and the
second containing all 70,000 labels (single row). """

trainImages = idx2numpy.convert_from_file('E:/classicDataSets/mnist/train-images-idx3-ubyte')
trainLabels = idx2numpy.convert_from_file('E:/classicDataSets/mnist/train-labels-idx1-ubyte')
testImages = idx2numpy.convert_from_file('E:/classicDataSets/mnist/t10k-images-idx3-ubyte')
testLabels = idx2numpy.convert_from_file('E:/classicDataSets/mnist/t10k-labels-idx1-ubyte')

images = np.concatenate([trainImages.reshape(60000, 784), testImages.reshape(10000, 784)])
labels = np.concatenate([trainLabels, testLabels])

with open('E:/classicDataSets/mnist/mnist_images.csv', 'w') as csvfile:
    writer = csv.writer(csvfile, delimiter=',', quotechar='|', quoting=csv.QUOTE_MINIMAL)
    for row in images:
        writer.writerow(row)

with open('E:/classicDataSets/mnist/mnist_labels.csv', 'w') as csvfile:
    writer = csv.writer(csvfile, delimiter=',', quotechar='|', quoting=csv.QUOTE_MINIMAL)
    writer.writerow(labels)
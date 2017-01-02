from __future__ import division
import numpy as np
import pylab as py
import matplotlib.cm as cm
import csv
from sklearn import svm

""" Python version 2.7.6 """

""" centroidClassifier and svdClassifier are based on
algorithms discussed in chapter 10 of the book Matrix
Methods in Data Mining and Pattern Recognition. """

""" Handwritten digit data of pixel size 28x28 obtained
from the MNIST website.  The training images are in a
60,000 x 784 array block, and the test images are in a
10,000 x 784 array block.  Labels included. """


def displayImage(image):
    """ Function used to display the pixel image of a digit. """

    py.imshow(image.reshape(28, 28), cmap=cm.Greys_r, vmin=0, vmax=255)
    py.show()


""" Begin Machine Learning Algorithms. """


def centroidClassifier():
    """ The function centroidClassifier compares test
    digits to the digit means formed from the training
    examples. """

    total = np.zeros(10)
    centroids = np.zeros((10, 784))
    for i in range(10):
        indices = trainLabels == i
        n = np.sum(indices)
        centroids[i] = np.sum(trainImages[np.where(indices)[0]], 0).reshape(1, -1) / n

    success = np.zeros(10)
    total = np.zeros(10)
    for image, label in zip(testImages, testLabels):
        norms = [np.linalg.norm(image - c) for c in centroids]
        success[label] += np.argmin(norms) == label
        total[label] += 1

    accuracy = (success / total) * 100  # this is the vector of digit specific accuracies.
    print
    "centroid accuracy: {}%".format(round(sum(accuracy) / 10, 1))


def ldaClassifier():
    """ The function LDAClassifier uses linear discriminant
    analysis to classify digits. """

    priors = [None] * 10
    centroids = [None] * 10
    covars = [None] * 10
    for i in range(10):
        indices = trainLabels == i
        priors[i] = sum(indices) / 60000
        centroids[i] = np.mean(trainImages[np.where(indices)], axis=0)
        covars[i] = np.cov(trainImages[np.where(indices)].T)

    covar = sum(covars) / 10
    invcovar = np.linalg.pinv(covar)
    S = np.linalg.svd(covar)[1]
    det = sum(np.log(S))

    success = np.zeros(10)
    total = np.zeros(10)
    for image, label in zip(testImages, testLabels):
        values = [np.log(p) - 0.5 * (np.dot(image - c, np.dot(invcovar, image - c)) + det) for p, c in
                  zip(priors, centroids)]
        success[label] += np.argmax(values) == label
        total[label] += 1

    accuracy = (success / total) * 100  # this is the vector of digit specific accuracies.
    print
    "lda accuracy: {}%".format(round(sum(accuracy) / 10, 1))


def svdClassifier(n):
    """ The function svdClassifier computes the SVD
    of the column stacked training examples for each
    digit.  The U matrix is cropped to the first n
    singular vectors and then test digits are evaluated
    by finding the digit which provides the best singular
    vector basis under the least squares 2-norm. """

    U = [0] * 10
    for i in range(10):
        indices = trainLabels == i
        block = np.array(trainImages[np.where(indices)[0]]).T
        U[i] = np.linalg.svd(block)[0]

    success = np.zeros(10)
    total = np.zeros(10)
    for image, label in zip(testImages, testLabels):
        # This norm calculation is equivalent to using np.linalg.lstsq(), but
        # instead it exploits the orthogonality of u[:,:n] for a 20% speed-up.
        norms = [np.linalg.norm(np.dot(u[:, :n], np.dot(u[:, :n].T, image)) - image) for u in U]
        success[label] += np.argmin(norms) == label
        total[label] += 1

    accuracy = (success / total) * 100  # this is the vector of digit specific accuracies.
    print
    "svd accuracy: {}%".format(round(sum(accuracy) / 10, 1))


def svmClassifier(*args, **kwargs):
    """ Using scikit-learn, the function svmClassifier computes
    a one against one support vector classifier.  Arguments are
    inputted into svm.SVC. """

    classifier = svm.SVC(*args, **kwargs)
    classifier.fit(trainImages, trainLabels)

    success = np.zeros(10)
    total = np.zeros(10)
    guesses = classifier.predict(testImages)
    for guess, label in zip(guesses, testLabels):
        success[label] += guess == label
        total[label] += 1

    accuracy = (success / total) * 100  # this is the vector of digit specific accuracies.
    print
    "svm accuracy: {}%".format(round(sum(accuracy) / 10, 1))


""" Test algorithms """

if __name__ == '__main__':
    images = []
    with open('E:/classicDataSets/mnist/mnist_images.csv', 'r') as csvfile:
        reader = csv.reader(csvfile, delimiter=',', quotechar='|', quoting=csv.QUOTE_MINIMAL)
        for row in reader:
            images.append(row)

    with open('E:/classicDataSets/mnist/mnist_labels.csv', 'r') as csvfile:
        reader = csv.reader(csvfile, delimiter=',', quotechar='|', quoting=csv.QUOTE_MINIMAL)
        labels = next(reader)

    vecfloat = np.vectorize(float)
    vecint = np.vectorize(int)
    images = vecfloat(images)
    labels = vecint(labels)

    trainImages = images[:60000]
    trainLabels = labels[:60000]
    testImages = images[60001:70000]
    testLabels = labels[60001:70000]

    centroidClassifier()
    ldaClassifier()
    svdClassifier(15)
    svmClassifier(kernel='poly', degree=2)
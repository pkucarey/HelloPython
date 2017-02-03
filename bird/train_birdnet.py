import os

import numpy as np

from keras.models import Sequential
from keras.models import model_from_json, model_from_yaml
from keras.preprocessing import image as image_utils
from keras.utils import np_utils
from keras.layers.core import Dense, Activation, Dropout, Flatten
from keras.layers.convolutional import Convolution2D
from keras.layers.pooling import MaxPooling2D
from keras.layers.normalization import BatchNormalization

# modify if necessary
DIM_ORDERING = 'tf'
DATA_ROOT_DIR = '/media/carey/000A768C0005BE99/bird/cub/CUB_200_2011/'
PARAM_ROOT_DIR = '/media/carey/000A768C0005BE99/bird/cub/param/'


def read_images(image_target_size):
    image_root_dir = DATA_ROOT_DIR + 'images/'
    subdirs = os.listdir(image_root_dir)

    images = []
        
    for subdir in sorted(subdirs):
        files = os.listdir(os.path.join(image_root_dir, subdir))

        for file in sorted(files):
            image_path = os.path.join(image_root_dir, subdir, file)

            image = image_utils.load_img(image_path, target_size=image_target_size)
            image = image_utils.img_to_array(image, dim_ordering=DIM_ORDERING)
            image /= 255  # scale the RGB values to [0, 1]
            images.append(image)

    images = np.stack(images, axis=0)

    return images


def read_class_labels():
    with open(DATA_ROOT_DIR + 'image_class_labels.txt', 'r') as f:
        lines = f.read().splitlines()
        # decrement by one to obtain labels starting from zero
        y = [int(line.split(' ')[1]) - 1 for line in lines]

    return np.array(y)


def train_test_split(X, y, split=0.1):
    num_train_examples = int(len(X) * (1 - split))
    num_output_classes = len(set(y))

    # data is ordered so shuffle it
    shuffled_indices = np.random.permutation(len(X))
    X = X[shuffled_indices, :, :, :]
    y = y[shuffled_indices]

    X_train = X[:num_train_examples, :, :, :]
    y_train = y[:num_train_examples]

    X_test = X[num_train_examples:, :, :, :]
    y_test = y[num_train_examples:]

    # convert class integers to one hot vectors
    Y_train = np_utils.to_categorical(y_train, num_output_classes)
    Y_test = np_utils.to_categorical(y_test, num_output_classes)

    print('X_train', X_train.shape)
    print('Y_train', Y_train.shape)
    print('X_test', X_test.shape)
    print('Y_test', Y_test.shape)

    return (X_train, Y_train), (X_test, Y_test)

def save_model_json(model, filename):
    # serialize model to JSON
    model_json = model.to_json()
    with open(filename+".json", "w") as json_file:
        json_file.write(model_json)
    # serialize weights to HDF5
    model.save_weights(filename+"_json.h5")
    print("Saved model to disk")

def load_model_json(filename):
    # load json and create model
    json_file = open(filename+'.json', 'r')
    loaded_model_json = json_file.read()
    json_file.close()
    loaded_model = model_from_json(loaded_model_json)
    # load weights into new model
    loaded_model.load_weights(filename+"_json.h5")
    loaded_model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
    print("Loaded model from disk")
    return  loaded_model

def save_model_yaml(model,filename):
    # serialize model to YAML
    model_yaml = model.to_yaml()
    with open(PARAM_ROOT_DIR+filename+".yaml", "w") as yaml_file:
        yaml_file.write(model_yaml)
    # serialize weights to HDF5
    model.save_weights(PARAM_ROOT_DIR+filename+"_yaml.h5")
    print("Saved model to disk")

def load_model_yaml(filename):
    # load YAML and create model
    yaml_file = open(PARAM_ROOT_DIR+filename+'.yaml', 'r')
    loaded_model_yaml = yaml_file.read()
    yaml_file.close()
    loaded_model = model_from_yaml(loaded_model_yaml)
    # load weights into new model
    loaded_model.load_weights(PARAM_ROOT_DIR+filename+"_yaml.h5")
    loaded_model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
    print("Loaded model from disk")
    return loaded_model

def main():
    # read input and output data
    image_target_size = (80, 80)
    image_width = image_target_size[0]
    image_height = image_target_size[1]

    X = read_images(image_target_size)
    y = read_class_labels()
    
    assert len(X) == len(y)

    # split data to train and test sets
    (X_train, Y_train), (X_test, Y_test) = train_test_split(X, y)

    num_output_classes = Y_train.shape[1]

    batch_size = 128
    num_epoch = 60

    model = Sequential()

    # convolution 1
    model.add(Convolution2D(64, 3, 3, border_mode='valid',
                            input_shape=(image_width, image_height, 3),
                            dim_ordering=DIM_ORDERING))
    model.add(Activation('relu'))
    model.add(BatchNormalization())

    # convolution 2
    model.add(Convolution2D(32, 3, 3, border_mode='valid',
                            dim_ordering=DIM_ORDERING))
    model.add(Activation('relu'))
    model.add(BatchNormalization())
    model.add(MaxPooling2D(pool_size=(2, 2), dim_ordering=DIM_ORDERING))

    # convolution 3
    model.add(Convolution2D(32, 3, 3, border_mode='valid',
                            dim_ordering=DIM_ORDERING))
    model.add(Activation('relu'))
    model.add(BatchNormalization())
    model.add(MaxPooling2D(pool_size=(2, 2), dim_ordering=DIM_ORDERING))
    model.add(Dropout(0.2))

    # flattening
    model.add(Flatten())

    # fully connected
    model.add(Dense(600))
    model.add(Activation('relu'))
    model.add(BatchNormalization())
    model.add(Dropout(0.2))

    # output layer
    model.add(Dense(num_output_classes))
    model.add(Activation('softmax'))

    # fit
    model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
    model.fit(X_train, Y_train, batch_size=batch_size, nb_epoch=num_epoch,
              validation_data=(X_test, Y_test))

    # evaluate
    # accuracy = model.evaluate(X_test, Y_test)
    # print('Model performance:', accuracy)

    save_model_json(model,'bird')
    save_model_yaml(model,'bird')

    # print('Model performance:', load_model_json('bird').evaluate(X_test, Y_test))
    # print('Model performance:', load_model_yaml('bird').evaluate(X_test, Y_test))

main()
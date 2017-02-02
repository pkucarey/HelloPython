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
    
    indexsub = 0
    
    for subdir in sorted(subdirs):
        files = os.listdir(os.path.join(image_root_dir, subdir))

        for file in sorted(files):
            image_path = os.path.join(image_root_dir, subdir, file)

            image = image_utils.load_img(image_path, target_size=image_target_size)
            image = image_utils.img_to_array(image, dim_ordering=DIM_ORDERING)
            image /= 255  # scale the RGB values to [0, 1]
            images.append(image)

        indexsub = indexsub + 1
        if (indexsub == 3):
            break

    images = np.stack(images, axis=0)

    return images

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

    X = read_images(image_target_size)

    model = load_model_json('bird')

    print(model.predict_classes(X))

main()
#!/bin/bash
#
# This script performs the following operations:
# 1. Downloads the MNIST dataset
# 2. Downloads the cifar dataset
# 3. Downloads the flower dataset
#
# Usage:
# cd slim
# ./scripts/download_and_convert_data.sh
:<<EOF
EOF
# Download the dataset
python2 download_and_convert_data.py \
  --dataset_name=mnist \
  --dataset_dir=/home/carey/workspace/data/mnist


# Download the dataset
python2 download_and_convert_data.py \
  --dataset_name=cifar10 \
  --dataset_dir=/home/carey/workspace/data/cifar10

# Download the dataset
python2 download_and_convert_data.py \
  --dataset_name=flowers \
  --dataset_dir=/home/carey/workspace/data/flowers

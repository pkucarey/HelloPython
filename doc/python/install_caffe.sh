#https://github.com/BVLC/caffe/wiki/Ubuntu-16.04-or-15.10-Installation-Guide

sudo apt-get update -y

sudo apt-get upgrade -y

sudo apt-get install -y build-essential cmake git pkg-config

sudo apt-get install -y libprotobuf-dev libleveldb-dev libsnappy-dev libhdf5-serial-dev protobuf-compiler

sudo apt-get install -y libatlas-base-dev 

sudo apt-get install -y --no-install-recommends libboost-all-dev

sudo apt-get install -y libgflags-dev libgoogle-glog-dev liblmdb-dev

# (Python general)
sudo apt-get install -y python-pip

# (Python 2.7 development files)
sudo apt-get install -y python-dev
sudo apt-get install -y python-numpy python-scipy

# (or, Python 3.5 development files)
sudo apt-get install -y python3-dev
sudo apt-get install -y python3-numpy python3-scipy

sudo apt-get install -y libopencv-dev

cd /home/carey/Downloads/caffe-master

cp Makefile.config.example Makefile.config
# Adjust Makefile.config (for example, if using Anaconda Python, or if cuDNN is desired)

#modify Makefile.config 
#1.Uncomment: CPU_ONLY := 1
#2.PYTHON_INCLUDE := /usr/include/python2.7 /usr/lib/python2.7/dist-packages/numpy/core/include
# Uncomment: WITH_PYTHON_LAYER := 1
# INCLUDE_DIRS := $(PYTHON_INCLUDE) /usr/local/include /usr/include/hdf5/serial
# LIBRARY_DIRS := $(PYTHON_LIB) /usr/local/lib /usr/lib /usr/lib/x86_64-linux-gnu /usr/lib/x86_64-linux-gnu/hdf5/serial

make all
make test
make runtest




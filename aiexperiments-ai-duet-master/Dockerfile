FROM ubuntu:16.10

RUN apt-get update --fix-missing && apt-get install -y \
    sudo \
    pkg-config \
    libpng-dev \
    libjpeg8-dev \
    libfreetype6-dev \
    libblas-dev \
    liblapack-dev \
    libatlas-base-dev \
    gfortran \
    python \
    python-dev \
    python-pip \
    curl --fix-missing && \
    curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash - && \
    apt-get install -y nodejs

RUN npm install webpack -g

RUN pip install -U https://pypi.python.org/packages/b6/ac/7015eb97dc749283ffdec1c3a88ddb8ae03b8fad0f0e611408f196358da3/pip-9.0.1-py2.py3-none-any.whl

#RUN pip install -U https://storage.googleapis.com/tensorflow/linux/cpu/tensorflow-0.12.1-cp27-none-linux_x86_64.whl

COPY ./server/requirements.txt /tmp/
RUN pip install -r /tmp/requirements.txt

#RUN pip install -U https://pypi.python.org/packages/7b/c5/a97ed48fcc878e36bb05a3ea700c077360853c0994473a8f6b0ab4c2ddd2/tensorflow-1.0.0-cp27-cp27mu-manylinux1_x86_64.whl

#RUN pip install -U https://pypi.python.org/packages/f6/dc/6e6ed372e4f6162b4808f0e857cc04cf1f36cbbfa7b8189c7a702d238ddf/magenta-0.1.9-py2-none-any.whl

#RUN pip install -U https://pypi.python.org/packages/0e/e9/37ee66dde483dceefe45bb5e92b387f990d4f097df40c400cf816dcebaa4/Flask-0.12-py2.py3-none-any.whl

#RUN pip install -U https://pypi.python.org/packages/72/de/ec28a64885e0b390063379cca601b60b1f9e51367e0c76030ac8a5cddd5e/gunicorn-19.6.0-py2.py3-none-any.whl

#RUN pip install -U https://pypi.python.org/packages/45/c9/65f1b4d44570eb466052a0334c16595bc180bc43db8d91a0e26936615ad9/ipython-5.2.2-py2-none-any.whl

COPY . /src/

WORKDIR /src/static/
RUN npm install && webpack -p

WORKDIR /src/server/

EXPOSE 8080
ENTRYPOINT python server.py

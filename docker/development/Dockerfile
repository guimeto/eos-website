# base image
FROM python:3.6-slim
ARG DEBIAN_FRONTEND=noninteractive
ENV PYTHONUNBUFFERED 1
ENV WORKPATH "/var/www/eos-website"

# set working directory
WORKDIR $WORKPATH


# Add requirements to Docker container
ADD ./requirements/development.pip $WORKPATH
# add source files to PYTHONPATH
ENV PYTHONPATH "${PYTHONPATH}:${WORKPATH}"


RUN apt-get update \
    && apt-get --no-install-recommends -y install  apt-utils \
    && apt-get --no-install-recommends -y install build-essential \
        default-libmysqlclient-dev python3-dev \
	&& apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*


# Install server requirements
RUN pip install --upgrade pip && pip install -r development.pip


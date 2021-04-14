#!/bin/bash

set -e
TAG="registry.gitlab.tugraz.at/dbp/topics/common/main:v1"
sudo docker build --tag "${TAG}" --file "Dockerfile" .
echo "Now run: sudo docker push '$TAG'"

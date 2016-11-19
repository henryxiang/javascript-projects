#!/bin/bash

SCRIPT_DIR=$(readlink -f $(dirname $0))
BASE=$(dirname $SCRIPT_DIR)
CONFDIR=$BASE/conf
PROJECT_NAME=$1
PROJECT_DIR=$BASE/$PROJECT_NAME

echo -e "Creating project '$PROJECT_NAME'"
mkdir $PROJECT_DIR

echo "Setting up project files and directories"
cd $PROJECT_DIR
mkdir src dist test
cp $CONFDIR/babelrc .babelrc
cp $CONFDIR/webpack.config.js .
cp $CONFDIR/index.html dist/
cp $CONFDIR/main.jsx src/
cat $CONFDIR/package.json | sed -e "s/__NAME__/$PROJECT_NAME/" > package.json

echo "Installing Node modules"
npm install

echo "Done"

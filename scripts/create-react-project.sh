#!/bin/bash

pushd `dirname $0` > /dev/null
SCRIPT_DIR=`pwd`
popd > /dev/null

BASE=`dirname $SCRIPT_DIR`
CONFDIR=$BASE/conf
PROJECT_NAME=$1
PROJECT_DIR=$BASE/$PROJECT_NAME

echo -e "Creating project '$PROJECT_NAME'"
cp -rf $CONFDIR $PROJECT_DIR

echo "Installing Node modules"
cd $PROJECT_DIR
sed -i "s/__NAME__/$PROJECT_NAME/" package.json
npm install

echo "Finished creating project"
echo -e "Run 'npm start' in '$PROJECT_DIR' directory"

exit

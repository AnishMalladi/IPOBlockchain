#!/bin/bash
# change to default folder.
cd ../finalTests

# input business network version - use latest version in tree.
echo "What is the deployable version number? (e.g. 0.0.1)"
read version

sed -i -e 's/"version": .*/"version": "'"$version"'",/' package.json

# Assuming that /fabric-tools/ is in default, if not, change
# make sure there is no instance of Fabric running
~/fabric-tools/stopFabric.sh

# start Fabric.
~/fabric-tools/startFabric.sh

# install new business network
composer network install -a "ipoblock@$version.bna" -c PeerAdmin@hlfv1

# start business network and create card admin with secret adminpw
composer network start -c PeerAdmin@hlfv1 -n ipoblock -V $version -A admin -S adminpw

# check to make sure its working
composer network ping -c admin

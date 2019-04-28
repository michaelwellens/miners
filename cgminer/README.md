# Block Erupter Quick Start Guide

For Blockeruter (USB Stick) use enable-icarus and for Gridseed use 

### For Raspian

First Perform:

	sudo apt-get update

	sudo apt-get install libusb-1.0-0-dev libusb-1.0-0 libcurl4-openssl-dev libncurses5-dev libudev-dev

Then follow the steps for Ubuntu.

### For Ubuntu

First step, plug in the USB device, then check that Ubuntu can see it by running the following command:

    $ ls -l /dev/ttyUSB*

Install the packages needed by cgminer:

    $ sudo apt-get install build-essential debhelper autoconf libtool libssl-dev yasm pkg-config libcurl4-openssl-dev wget unzip libjansson-dev libudev-dev libusb-1.0-0-dev git quilt uthash-dev  libncurses5-dev pkg-config automake autopoint

Download the source for cgminer:

    $ wget https://github.com/ckolivas/cgminer/archive/v3.8.2.tar.gz


Unpack the source archive:

    $ tar -xvzf v3.8.2.tar.gz


Navigate into the source directory:

    $ cd cgminer-3.8.0/


Run the autogen script:

    $ ./autogen.sh


Configure the project to enable support for the Block Erupter:

    $ ./configure --enable-icarus


Use make to build the project:

    $ make


Use make to install the build:

    $ sudo make install


Navigate back to the home folder:

    $ cd ~/


Run cgminer in benchmark mode to check that everything is working:

    $ cgminer --benchmark


You should be able to see the devices mining at 333Mh/s each.  Press ctrl+c to kill the program.  Instead of just running cgminer directly from the commandline, write a simple upstart job to daemonize the process with desired settings:

    $ sudo touch /etc/init/btc-miner.conf
    $ echo "stop on shutdown" | sudo tee -a /etc/init/btc-miner.conf
    $ echo "" | sudo tee -a /etc/init/btc-miner.conf
    $ echo "script" | sudo tee -a /etc/init/btc-miner.conf
    $ echo "  exec sudo cgminer --url=xxx.com:3335 --user=xxx --pass=xxx" | sudo tee -a /etc/init/btc-miner.conf
    $ echo "end script" | sudo tee -a /etc/init/btc-miner.conf
    $ echo "console output" | sudo tee -a /etc/init/btc-miner.conf



Now start mining:

    $ sudo service btc-miner start

Happy Mining!

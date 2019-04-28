# CGMiner
cd ~/cgminer_zues_gridseed
lxterminal --command='sudo ./cgminer --sha256 -o stratum+tcp://eu.multipool.us:9999 -u mcgunit.1 -p x --gridseed-options=baud=115200,freq=750,chips=5,modules=1,usefifo=0,btc=16 --hotplug=2'

sleep 50

lxterminal --command='sudo ./cgminer --scrypt -o stratum+tcp://eu.multipool.us:7777 -u mcgunit.2 -p x --gridseed-options=baud=115200,freq=750,chips=5 --hotplug=2'


# CPUMiner 
#cd ~/cpuminer-gc3355-master

#lxterminal --command='sudo ./minerd --dual --freq=750 --gc3355=/dev/ttyACM0 -o stratum+tcp://eu.multipool.us:7777 -u mcgunit.2 -p x'

# BFGMiner only supports scrypt
#cd ~/bfgminer

#sudo ./bfgminer --scrypt -S all -o stratum+tcp://eu.multipool.us:7777 -u mcgunit.2 -p x -S gridseed:all --set-device gridseed:clock=835




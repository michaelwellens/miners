/**
 * Service to communicate with the cgminer api.
 * Ment to use with gridseed in dual mode
 * Currently for port 4028 and 4029.
 * Therefore use the folowing commands to run the cgminers
 * sudo ./cgminer --sha256 -o stratum+tcp://eu.multipool.us:9999 -u mcgunit.1 -p x --gridseed-options=baud=115200,freq=750,chips=5,modules=1,usefifo=0,btc=16 --hotplug=2 --api-listen --api-port 4028
 * # Sleep is needed to give the time for the miners to setup
 * sleep 50
 * sudo ./cgminer --scrypt -o stratum+tcp://eu.multipool.us:7777 -u mcgunit.2 -p x --gridseed-options=baud=115200,freq=750,chips=5,modules=1,usefifo=0,btc=0 --hotplug=2 --api-listen --api-port 4029
 */
var net = require('net');


    

var client = new net.Socket();

client.on('data', function(data) {
    var readBuffer = new Array();
    readBuffer = data.toString().split(",");
    console.log('Received: ' + readBuffer);
    client.destroy(); // kill client after server's response otherwise an error will occur
});

client.on('close', function() {
    console.log('Connection closed');
});

function getVersion(){
    client.connect(4028, '127.0.0.1', function() {
        console.log('Connected');
        client.write('version');
        
    });
}

function getSummary(){
    client.connect(4028, '127.0.0.1', function() {
        console.log('Connected');
        client.write('summary');
        
    });
}

function getDevs(){
    client.connect(4028, '127.0.0.1', function() {
        console.log('Connected');
        client.write('devs');
        
    });
}

function getDevdetails(){
    client.connect(4028, '127.0.0.1', function() {
        console.log('Connected');
        client.write('devdetails');
        
    });
}

setInterval(getDevdetails,1000,client);





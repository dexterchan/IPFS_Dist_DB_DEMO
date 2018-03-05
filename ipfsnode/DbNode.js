const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')


class DbNodeClass{

    constructor() {
        this.ipfsOptions = {
            EXPERIMENTAL: {
              pubsub: true
            },
            config: {
              Addresses: {
                API: '/ip4/127.0.0.1/tcp/4001',
                // Swarm: ['/ip4/0.0.0.0/tcp/4002'],
                Swarm: ['/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star'],
                Gateway: '/ip4/0.0.0.0/tcp/4003'
              }
            }
          };
          // Create IPFS instance
        this.ipfs = new IPFS(this.ipfsOptions);
        this.myDBKeyFile=__dirname + "/DBAccess/" + "MasterDBNodeAddress.log";
        this.db=undefined;
    }

    registerMasterNode(){
        this.ipfs.on('ready', async() => {
            // Create OrbitDB instance
            const orbitdb = new OrbitDB(ipfs)
          
            const access = {
              write: [orbitdb.key.getPublic('hex')]
            }
          
            this.db = await orbitdb.keyvalue('first-database', access)
          
            strData = 'DB address:' + this.db.address.toString()+"\n";
            strData+= 'DB keypair:' + this.db.key+"\n";
            strData+='DB public key:' + this.db.key.getPublic('hex')+"\n";
            console.log(strData);
            fs.writeFile(this.myDBKeyFile,strData, 'utf8', function (err) {
                console.log("DB address Written into :"+ this.myDBKeyFile);
              }
            );
            await this.db.load()
        });
        
    }
    connectMasterNode(address){

    }


}

module.exports = DbNodeClass;
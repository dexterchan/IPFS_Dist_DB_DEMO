const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')

// OrbitDB uses Pubsub which is an experimental feature
// and need to be turned on manually.
// Note that these options need to be passed to IPFS in
// all examples in this document even if not specfied so.
const ipfsOptions = {
  EXPERIMENTAL: {
    pubsub: true
  },
  config: {
    Addresses: {
      API: '/ip4/127.0.0.1/tcp/4001',
      // Swarm: ['/ip4/0.0.0.0/tcp/4002'],
      Swarm: ['/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star'],
      //Swarm: ['/dns4/localhost/tcp/9090/wss/p2p-websocket-star'],
      Gateway: '/ip4/0.0.0.0/tcp/4003'
    }
  }
}



// Create IPFS instance
const ipfs = new IPFS(ipfsOptions)

ipfs.on('ready', async() => {
  // Create OrbitDB instance
  const orbitdb = new OrbitDB(ipfs)

  const access = {
    write: [orbitdb.key.getPublic('hex')]
  }

  const db = await orbitdb.keyvalue('first-database', access)

  console.log('DB address:' + db.address.toString())
  console.log('DB keypair:\n' + db.key)
  console.log('DB public key:\n' + db.key.getPublic('hex'))

  console.log('try insert entries....')
  await db.put('name', '{name:\'dog\',pos:\'erg\'}')

  console.log('get entries...')
  const value = db.get('name')
  console.log(value)

  // console.log('DB private key:\n' + db.key.getPrivate('hex'))
})

const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')
const argv = require('minimist')(process.argv.slice(2));

console.log("access db:")
console.log(argv.db)
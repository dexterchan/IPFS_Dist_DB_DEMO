var fs = require("fs");
var zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('/Users/dexter/Documents/IPFS_Dist_DB_DEMO/tutorial/input.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('/Users/dexter/Documents/IPFS_Dist_DB_DEMO/tutorial/input.txt'));
  
console.log("File Decompressed.");
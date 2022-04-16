let fs = require('fs');
let axios = require('axios');

let media = ["Cereal Killa - Blue Wednesday.mp4"]  //If more than one use " , " for next file.
let ipfsArray =[];
let promise = [];

for (let i = 0; i < media.length; i++){
          promise.push({
                    new Promise{(res, rej) => {
                              fs.readFile()
                    }}
          })
}

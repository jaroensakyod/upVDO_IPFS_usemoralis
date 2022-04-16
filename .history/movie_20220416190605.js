let fs = require('fs');
let axios = require('axios');

let media = ["Cereal Killa - Blue Wednesday.mp4"]  //If more than one use " , " for next file.
let ipfsArray =[];
let promise = [];

for (let i = 0; i < media.length; i++){
          promise.push(
                    new Promise((res, rej) => {
                              fs.readFile(`${__dirname}/export/${media[i]}`, (err,data) => {
                                        if (err) rej();
                                        ipfsArray.push({
                                                  path: `media/${i}`,
                                                  content: data.toString("base64"),
                                        });
                                        res();
                              });
                    })
          );
}

promise.all(promise).then(() => {
          axios.post(
                    ""
          )
})